import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/site/site-layout'
import { AboutPage } from '@/features/about'
import { IslandCrashPage } from '@/features/island-crash'
import { LandingPage } from '@/features/landing'
import { TeamPage } from '@/features/team'

export default function App() {
  return <BrowserRouter><SiteLayout><Routes><Route path="/" element={<LandingPage />} /><Route path="/island-crash" element={<IslandCrashPage />} /><Route path="/about-us" element={<AboutPage />} /><Route path="/our-team" element={<TeamPage />} /></Routes></SiteLayout></BrowserRouter>
}
