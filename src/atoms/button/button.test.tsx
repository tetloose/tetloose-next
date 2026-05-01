import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './button.component'

describe('Button', () => {
  it('renders a button element', () => {
    render(<Button label={'Click me'} data-testid={'btn'} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('defaults to type button', () => {
    render(<Button label={'Click me'} />)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('accepts type overrides', () => {
    render(<Button type={'submit'} label={'Submit'} />)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')

    render(<Button type={'reset'} label={'Reset'} />)
    expect(screen.getByRole('button', { name: 'Reset' })).toHaveAttribute('type', 'reset')
  })

  it('renders label text', () => {
    render(<Button label={'Click me'} />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <Button>
        <span>Child</span>
      </Button>
    )
    expect(screen.getByText('Child')).toBeInTheDocument()
  })

  it('applies additional className', () => {
    render(<Button className={'mt-4'} label={'Styled'} />)
    expect(screen.getByRole('button')).toHaveClass('mt-4')
  })

  it('handles disabled state', () => {
    render(<Button label={'Disabled'} disabled />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('applies primary variant classes', () => {
    render(<Button variant={'primary'} label={'Primary'} />)
    expect(screen.getByRole('button')).toHaveClass('bg-black', 'text-white')
  })

  it('applies secondary variant classes', () => {
    render(<Button variant={'secondary'} label={'Secondary'} />)
    expect(screen.getByRole('button')).toHaveClass('bg-transparent', 'text-black')
  })

  it('has no variant classes when variant is omitted', () => {
    render(<Button label={'Bare'} />)
    const btn = screen.getByRole('button')
    expect(btn).not.toHaveClass('bg-black')
    expect(btn).not.toHaveClass('bg-transparent')
  })
})

describe('Button.Link', () => {
  it('renders a link element', () => {
    render(<Button.Link href={'/test'} label={'Go'} data-testid={'link'} />)
    expect(screen.getByTestId('link')).toBeInTheDocument()
  })

  it('renders label text', () => {
    render(<Button.Link href={'/test'} label={'Go'} />)
    expect(screen.getByText('Go')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <Button.Link href={'/test'}>
        <span>Child</span>
      </Button.Link>
    )
    expect(screen.getByText('Child')).toBeInTheDocument()
  })

  it('applies additional className', () => {
    render(<Button.Link href={'/test'} className={'mt-4'} label={'Styled'} data-testid={'link'} />)
    expect(screen.getByTestId('link')).toHaveClass('mt-4')
  })

  it('sets href', () => {
    render(<Button.Link href={'/about'} label={'About'} data-testid={'link'} />)
    expect(screen.getByTestId('link')).toHaveAttribute('href', '/about')
  })

  it('adds rel noopener noreferrer for _blank target', () => {
    render(<Button.Link href={'https://example.com'} target={'_blank'} label={'External'} data-testid={'link'} />)
    expect(screen.getByTestId('link')).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('preserves explicit rel over auto rel', () => {
    render(<Button.Link href={'/test'} rel={'nofollow'} label={'Link'} data-testid={'link'} />)
    expect(screen.getByTestId('link')).toHaveAttribute('rel', 'nofollow')
  })

  it('applies primary variant classes', () => {
    render(<Button.Link href={'/'} variant={'primary'} label={'Primary'} data-testid={'link'} />)
    expect(screen.getByTestId('link')).toHaveClass('bg-black', 'text-white')
  })

  it('applies secondary variant classes', () => {
    render(<Button.Link href={'/'} variant={'secondary'} label={'Secondary'} data-testid={'link'} />)
    expect(screen.getByTestId('link')).toHaveClass('bg-transparent', 'text-black')
  })
})
