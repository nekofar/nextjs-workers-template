import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from './button'

describe('Button', () => {
  it('renders a native button with default styling', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button', { name: 'Click me' })

    expect(button).toHaveClass('bg-primary', 'text-primary-foreground')
  })

  it('allows rendering as a child element', () => {
    render(
      <Button asChild variant="outline">
        <a href="/docs">Docs</a>
      </Button>,
    )

    const link = screen.getByRole('link', { name: 'Docs' })

    expect(link).toHaveAttribute('href', '/docs')
    expect(link.dataset.slot).toBe('button')
    expect(link).toHaveClass('border', 'hover:bg-accent')
  })
})
