import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spacer } from './Spacer.component'

describe('Spacer', () => {
  it('renders with default props', () => {
    render(
      <Spacer
        display={{ default: 'block' }}
        padding={{ default: 5 }}
        margin={{ default: 3 }}
        modifiers={['custom-modifier']}
        data-testid={'spacer-test'}
        aria-label={'Spacer Container'}
      >
        <div>Spacer content</div>
      </Spacer>
    )

    const spacerElement = screen.getByTestId('spacer-test')
    expect(spacerElement).toBeInTheDocument()
    expect(spacerElement.className).toContain('spacer')
    expect(spacerElement).toHaveClass('custom-modifier')
    expect(spacerElement).toHaveAttribute('data-testid', 'spacer-test')
    expect(spacerElement).toHaveAttribute('aria-label', 'Spacer Container')
    expect(spacerElement.tagName).toBe('SPAN')
  })

  it('returns children directly when no props provided', () => {
    const { container } = render(
      <Spacer>
        <div data-testid={'direct-child'}>Direct child</div>
      </Spacer>
    )

    const childElement = screen.getByTestId('direct-child')
    expect(childElement).toBeInTheDocument()

    // Should not have a wrapper span when no spacing props
    const spanElement = container.querySelector('span')
    expect(spanElement).not.toBeInTheDocument()
  })

  it('renders with padding only', () => {
    render(
      <Spacer padding={{ default: 5 }} data-testid={'padding-only'}>
        <div>Content</div>
      </Spacer>
    )

    const spacerElement = screen.getByTestId('padding-only')
    expect(spacerElement).toBeInTheDocument()
    expect(spacerElement.className).toContain('spacer')
  })

  it('renders with margin only', () => {
    render(
      <Spacer margin={{ default: 3 }} data-testid={'margin-only'}>
        <div>Content</div>
      </Spacer>
    )

    const spacerElement = screen.getByTestId('margin-only')
    expect(spacerElement).toBeInTheDocument()
    expect(spacerElement.className).toContain('spacer')
  })

  it('renders with display only', () => {
    render(
      <Spacer display={{ default: 'flex' }} data-testid={'display-only'}>
        <div>Content</div>
      </Spacer>
    )

    const spacerElement = screen.getByTestId('display-only')
    expect(spacerElement).toBeInTheDocument()
    expect(spacerElement.className).toContain('spacer')
  })
})
