import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="site-shell"><ScrollToTop /><a className="skip-link" href="#content">Skip to content</a><SiteHeader />{children}<SiteFooter /><Toaster /></div>
}
