import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { SiteLayout } from '@/components/site/site-layout'
import { describe, expect, it, vi } from 'vitest'
import { LandingPage } from './landing-page'

describe('LandingPage', () => {
  const renderLanding = () => render(<MemoryRouter><SiteLayout><LandingPage /></SiteLayout></MemoryRouter>)

  it('renders the verified Island Crash and Rice Mission content', () => {
    renderLanding()
    expect(screen.getByRole('heading', { name: 'Island Crash.' })).toBeInTheDocument()
    expect(screen.getByText('Rice Mission 2026')).toBeInTheDocument()
    expect(screen.queryByText('Castaway Expedition')).not.toBeInTheDocument()
    expect(screen.queryByText('Camp Carabao', { exact: true })).not.toBeInTheDocument()
    expect(document.querySelector('iframe')).toBeNull()
    expect(document.querySelector('form')).toBeNull()
  })

  it('renders a muted local Coron video and lets visitors pause it', async () => {
    const user = userEvent.setup()
    const play = vi.spyOn(HTMLMediaElement.prototype, 'play').mockResolvedValue(undefined)
    const pause = vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => undefined)
    renderLanding()
    const video = screen.getByLabelText('Moving scenes from Coron Island')
    expect(video.querySelector('source')).toHaveAttribute('src', '/media/red-carabao/coron.mp4')
    expect(video).toHaveProperty('muted', true)
    await user.click(screen.getByRole('button', { name: 'Pause Coron video' }))
    expect(pause).toHaveBeenCalled()
    play.mockRestore()
    pause.mockRestore()
  })

  it('opens and closes the booking dialog', async () => {
    const user = userEvent.setup()
    renderLanding()
    await user.click(screen.getAllByRole('button', { name: 'Apply for an expedition' })[0])
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Future expeditions will open soon.')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Keep exploring' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens mobile navigation', async () => {
    const user = userEvent.setup()
    renderLanding()
    await user.click(screen.getByRole('button', { name: 'Open navigation' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Island Crash' })).toBeInTheDocument()
  })

  it('uses the static poster instead of video when reduced motion is requested', () => {
    const matchMedia = window.matchMedia
    window.matchMedia = vi.fn().mockReturnValue({
      matches: true,
      media: '(prefers-reduced-motion: reduce)',
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })
    renderLanding()
    expect(screen.queryByLabelText('Moving scenes from Coron Island')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Coron video/ })).not.toBeInTheDocument()
    window.matchMedia = matchMedia
  })
})
