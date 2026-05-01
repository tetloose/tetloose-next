import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Typography } from './typography.component'

describe('Typography', () => {
  it('renders as span by default', () => {
    const { container } = render(<Typography text={'Hello'} />)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('renders the correct tag', () => {
    const { container } = render(<Typography tag={'h1'} text={'Heading'} />)
    expect(container.querySelector('h1')).toBeInTheDocument()
  })

  it('renders text prop', () => {
    render(<Typography tag={'p'} text={'Hello World'} />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <Typography tag={'p'}>
        <span data-testid={'child'}>child</span>
      </Typography>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('applies default color class', () => {
    const { container } = render(<Typography text={'Text'} />)
    expect(container.querySelector('span')).toHaveClass('text-black')
  })

  it('applies color class', () => {
    const { container } = render(<Typography color={'text-white'} text={'Text'} />)
    expect(container.querySelector('span')).toHaveClass('text-white')
  })

  it('applies display class', () => {
    const { container } = render(<Typography display={'block'} text={'Text'} />)
    expect(container.querySelector('span')).toHaveClass('block')
  })

  it('applies size class', () => {
    const { container } = render(<Typography size={'text-2xl'} text={'Text'} />)
    expect(container.querySelector('span')).toHaveClass('text-2xl')
  })

  it('applies weight class', () => {
    const { container } = render(<Typography weight={'font-bold'} text={'Text'} />)
    expect(container.querySelector('span')).toHaveClass('font-bold')
  })

  it('applies align class', () => {
    const { container } = render(<Typography align={'text-center'} text={'Text'} />)
    expect(container.querySelector('span')).toHaveClass('text-center')
  })

  it('applies additional className', () => {
    const { container } = render(<Typography className={'custom-class'} text={'Text'} />)
    expect(container.querySelector('span')).toHaveClass('custom-class')
  })

  it('renders both text and children', () => {
    const { container } = render(
      <Typography tag={'p'} text={'prefix '}>
        <span data-testid={'child'}>suffix</span>
      </Typography>
    )
    expect(container.querySelector('p')?.textContent).toContain('prefix')
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})
