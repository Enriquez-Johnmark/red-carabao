import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { BookingDialog } from './booking-dialog'
import { Brand } from './brand'

const navigation = [{ label: 'Home', to: '/' }, { label: 'Island Crash', to: '/island-crash' }, { label: 'About Us', to: '/about-us' }, { label: 'Our Team', to: '/our-team' }]

function NavigationLinks({ mobile = false, onNavigate }: { mobile?: boolean, onNavigate?: () => void }) {
  return <nav className={mobile ? 'mobile-nav' : 'desktop-nav'} aria-label={mobile ? 'Mobile navigation' : 'Main navigation'}>{navigation.map((item) => mobile ? <Link key={item.to} to={item.to} onClick={onNavigate}>{item.label}</Link> : <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}</nav>
}

export function SiteHeader() {
  const { pathname } = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [pathname])

  return <header className={cn('site-header-wrap', isHome && !isScrolled ? 'site-header-overlay' : 'site-header-solid', isScrolled && 'site-header-scrolled')}>
    <div className="site-header"><Brand /><NavigationLinks /><div className="header-book"><BookingDialog /></div><Sheet open={mobileNavigationOpen} onOpenChange={setMobileNavigationOpen}><SheetTrigger render={<Button variant="ghost" size="icon" className="mobile-toggle" aria-label="Open navigation" />}><Menu /></SheetTrigger><SheetContent side="right" className="mobile-sheet"><SheetTitle className="sr-only">Navigation</SheetTitle><SheetDescription className="sr-only">Explore Red Carabao travel information.</SheetDescription><div className="mobile-nav-brand"><Brand /></div><NavigationLinks mobile onNavigate={() => setMobileNavigationOpen(false)} /><div className="mobile-book"><BookingDialog /></div></SheetContent></Sheet></div>
  </header>
}
