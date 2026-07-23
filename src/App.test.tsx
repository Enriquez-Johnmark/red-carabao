import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

const appBasePath =
  import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '')
const appPath = (path = '/') => `${appBasePath}${path}`

describe('application routes', () => {
  beforeEach(() => {
    window.history.pushState({}, '', appPath())
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
  })

  it('renders Island Crash directly', () => {
    window.history.pushState({}, '', appPath('/island-crash'))
    render(<App />)
    expect(screen.getByRole('heading', { name: /Island Crash/ })).toBeInTheDocument()
    expect(screen.getByText(/application-only/i)).toBeInTheDocument()
  })

  it('renders verified About content directly', () => {
    window.history.pushState({}, '', appPath('/about-us'))
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /Travel should leave a place stronger/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/social enterprise based in Coron/i)).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: 'Red Carabao' })).not.toHaveLength(0)
  })

  it('renders Our Team directly and exposes it through navigation', async () => {
    window.history.pushState({}, '', appPath('/our-team'))
    const user = userEvent.setup()
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /People who make.*day matter/i }),
    ).toBeInTheDocument()
    await user.click(screen.getAllByRole('link', { name: 'About Us' })[0])
    expect(screen.getByRole('link', { name: /Meet the team/i })).toBeInTheDocument()
  })

  it('exposes Our Team in the mobile navigation sheet', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Open navigation' }))
    expect(screen.getByRole('dialog')).toHaveTextContent('Our Team')
  })

  it('navigates from the home page to Island Crash', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('link', { name: 'Island Crash' })[0])
    expect(screen.getByRole('heading', { name: /Island Crash/ })).toBeInTheDocument()
  })

  it('applies the scroll treatment to the Home header without changing its layout contract', () => {
    render(<App />)
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 100 })
    fireEvent.scroll(window)
    expect(document.querySelector('.site-header-wrap')).toHaveClass('site-header-scrolled')
  })

  it('uses an overlay header only for the Home route at page entry', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    render(<App />)
    expect(document.querySelector('.site-header-wrap')).toHaveClass('site-header-overlay')
  })

  it('uses a solid header for interior routes', () => {
    window.history.pushState({}, '', appPath('/about-us'))
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    render(<App />)
    expect(document.querySelector('.site-header-wrap')).toHaveClass('site-header-solid')
  })

  it('slides interior headers into their fixed solid state after scrolling', () => {
    window.history.pushState({}, '', appPath('/island-crash'))
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 100 })
    render(<App />)
    expect(document.querySelector('.site-header-wrap')).toHaveClass('site-header-solid')
    expect(document.querySelector('.site-header-wrap')).toHaveClass('site-header-scrolled')
  })
})
