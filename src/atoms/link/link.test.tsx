import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Link } from './link.component'

describe('Link', () => {
  it('renders an anchor element', () => {
    render(<Link href={'/example'} text={'Click here'} />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('renders text prop', () => {
    render(<Link href={'/example'} text={'Click here'} />)
    expect(screen.getByText('Click here')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <Link href={'/example'}>
        <span data-testid={'child'}>child</span>
      </Link>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('applies href', () => {
    render(<Link href={'/example'} text={'link'} />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/example')
  })

  it('applies base hover underline class', () => {
    render(<Link href={'/example'} text={'link'} />)
    expect(screen.getByRole('link')).toHaveClass('underline')
  })

  it('applies default color class', () => {
    render(<Link href={'/example'} text={'link'} />)
    expect(screen.getByRole('link')).toHaveClass('text-black')
  })

  it('applies color class', () => {
    render(<Link href={'/example'} color={'text-white'} text={'link'} />)
    expect(screen.getByRole('link')).toHaveClass('text-white')
  })

  it('applies target', () => {
    render(<Link href={'/example'} target={'_blank'} text={'link'} />)
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
  })

  it('applies rel', () => {
    render(<Link href={'/example'} rel={'noopener noreferrer'} text={'link'} />)
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies additional className', () => {
    render(<Link href={'/example'} className={'custom'} text={'link'} />)
    expect(screen.getByRole('link')).toHaveClass('custom')
  })
})
