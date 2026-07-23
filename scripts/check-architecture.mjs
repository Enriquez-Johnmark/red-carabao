import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative, resolve, sep } from 'node:path'

const projectRoot = process.cwd()
const sourceRoot = join(projectRoot, 'src')
const featuresRoot = join(sourceRoot, 'features')
const supportedExtensions = ['.ts', '.tsx']
const importPattern = /(?:import|export)\s+(?:type\s+)?(?:[\s\S]*?\s+from\s+)?['"]([^'"]+)['"]/g
const sharedDirectories = ['components', 'hooks', 'lib', 'types', 'utils']

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name)
    if (entry.isDirectory()) return filesIn(entryPath)
    return supportedExtensions.some((extension) => entry.name.endsWith(extension)) ? [entryPath] : []
  })
}

function featureFor(filePath) {
  const fromFeatures = relative(featuresRoot, filePath)
  if (fromFeatures.startsWith('..') || fromFeatures === '') return null
  return fromFeatures.split(sep)[0]
}

function featureFromAlias(source) {
  const match = source.match(/^@\/features\/([^/]+)(?:\/(.*))?$/)
  return match ? { name: match[1], deepPath: match[2] } : null
}

function isSharedModule(filePath) {
  const firstDirectory = relative(sourceRoot, filePath).split(sep)[0]
  return sharedDirectories.includes(firstDirectory)
}

function isCompositionRoot(filePath) {
  const fromSource = relative(sourceRoot, filePath)
  return fromSource === 'App.tsx' || fromSource.startsWith(`app${sep}`)
}

function resolveRelativeImport(fromFile, source) {
  const candidate = resolve(join(fromFile, '..'), source)
  const paths = [candidate, ...supportedExtensions.map((extension) => `${candidate}${extension}`), ...supportedExtensions.map((extension) => join(candidate, `index${extension}`))]
  return paths.find(existsSync)
}

if (!existsSync(featuresRoot)) {
  console.log('Architecture check passed (no features directory).')
  process.exit(0)
}

const featureNames = readdirSync(featuresRoot).filter((entry) => statSync(join(featuresRoot, entry)).isDirectory())
const errors = []

for (const featureName of featureNames) {
  if (!existsSync(join(featuresRoot, featureName, 'index.ts'))) errors.push(`Feature "${featureName}" must expose a public API at src/features/${featureName}/index.ts.`)
}

for (const filePath of filesIn(sourceRoot)) {
  const fileFeature = featureFor(filePath)
  const fileLabel = relative(projectRoot, filePath)
  const contents = readFileSync(filePath, 'utf8')

  for (const match of contents.matchAll(importPattern)) {
    const source = match[1]
    const aliasFeature = featureFromAlias(source)

    if (aliasFeature) {
      if (isSharedModule(filePath)) errors.push(`${fileLabel}: shared code cannot import feature "${aliasFeature.name}" (${source}).`)
      if (fileFeature && aliasFeature.name !== fileFeature) errors.push(`${fileLabel}: feature "${fileFeature}" cannot import feature "${aliasFeature.name}" (${source}).`)
      if (!fileFeature && !isSharedModule(filePath) && !isCompositionRoot(filePath)) errors.push(`${fileLabel}: only a composition root may import feature "${aliasFeature.name}" (${source}).`)
      if (!fileFeature && aliasFeature.deepPath) errors.push(`${fileLabel}: import feature "${aliasFeature.name}" through its public API (@/features/${aliasFeature.name}), not ${source}.`)
      continue
    }

    if (!source.startsWith('.')) continue
    const resolvedImport = resolveRelativeImport(filePath, source)
    const importedFeature = resolvedImport ? featureFor(resolvedImport) : null
    if (isSharedModule(filePath) && importedFeature) errors.push(`${fileLabel}: shared code cannot import feature "${importedFeature}" (${source}).`)
    if (fileFeature && importedFeature && importedFeature !== fileFeature) errors.push(`${fileLabel}: feature "${fileFeature}" cannot import feature "${importedFeature}" (${source}).`)
    if (!fileFeature && !isSharedModule(filePath) && !isCompositionRoot(filePath) && importedFeature) errors.push(`${fileLabel}: only a composition root may import feature "${importedFeature}" (${source}).`)
  }
}

if (errors.length > 0) {
  console.error('Architecture check failed:\n')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Architecture check passed (${featureNames.length} feature${featureNames.length === 1 ? '' : 's'} checked).`)
