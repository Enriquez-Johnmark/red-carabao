import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

describe('application routes', () => {
  beforeEach(() => window.history.pushState({}, '', '/'))

  it('renders Island Crash directly', () => {
    window.history.pushState({}, '', '/island-crash')
    render(<App />)
    expect(screen.getByRole('heading', { name: /Island Crash/ })).toBeInTheDocument()
    expect(screen.getByText(/application-only/i)).toBeInTheDocument()
  })

  it('renders verified About content directly', () => {
    window.history.pushState({}, '', '/about-us')
    render(<App />)
    expect(screen.getByRole('heading', { name: /Travel should leave a place stronger/i })).toBeInTheDocument()
    expect(screen.getByText(/social enterprise based in Coron/i)).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: 'Red Carabao' })).not.toHaveLength(0)
  })

  it('renders Our Team directly and exposes it through navigation', async () => {
    window.history.pushState({}, '', '/our-team')
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('heading', { name: /People who make.*day matter/i })).toBeInTheDocument()
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

  it('compacts the sticky header after scrolling', () => {
    render(<App />)
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 40 })
    fireEvent.scroll(window)
    expect(document.querySelector('.site-header-wrap')).toHaveClass('site-header-scrolled')
  })
})
