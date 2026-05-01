import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spacer } from './spacer.component'

describe('Spacer', () => {
  it('always renders a span', () => {
    const { container } = render(<Spacer />)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('applies block display by default', () => {
    const { container } = render(<Spacer />)
    expect(container.querySelector('span')).toHaveClass('block')
  })

  it('applies inline-block when display prop is set', () => {
    const { container } = render(<Spacer display={'inline-block'} />)
    expect(container.querySelector('span')).toHaveClass('inline-block')
  })

  it('applies marginTop class', () => {
    const { container } = render(<Spacer marginTop={'mt-6'} />)
    expect(container.querySelector('span')).toHaveClass('mt-6')
  })

  it('applies paddingTop class', () => {
    const { container } = render(<Spacer paddingTop={'pt-3'} />)
    expect(container.querySelector('span')).toHaveClass('pt-3')
  })

  it('applies both marginTop and paddingTop classes', () => {
    const { container } = render(<Spacer marginTop={'mt-4'} paddingTop={'pt-2'} />)
    expect(container.querySelector('span')).toHaveClass('mt-4', 'pt-2')
  })

  it('applies additional className', () => {
    const { container } = render(<Spacer className={'custom'} />)
    expect(container.querySelector('span')).toHaveClass('custom')
  })

  it('renders children inside the span', () => {
    render(
      <Spacer>
        <div data-testid={'child'}>Content</div>
      </Spacer>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})
