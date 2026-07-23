import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { SiteLayout } from '@/components/site/site-layout'
import { TeamPage } from './team-page'

describe('TeamPage', () => {
  it('renders the public roster and static collaboration contacts', () => {
    render(<MemoryRouter><SiteLayout><TeamPage /></SiteLayout></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /People who make.*day matter/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Captain Benjie' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Robert' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Email the team/i })).toHaveAttribute('href', 'mailto:info@redcarabao.com')
    expect(screen.getAllByRole('link', { name: /WhatsApp/i })[0]).toHaveAttribute('href', 'https://wa.me/639952350304')
    expect(screen.queryByText(/Write a bio for each team member/i)).not.toBeInTheDocument()
    expect(screen.queryByText('info@mysite.com')).not.toBeInTheDocument()
    expect(document.querySelector('form')).toBeNull()
    expect(document.querySelector('iframe')).toBeNull()
  })
})
