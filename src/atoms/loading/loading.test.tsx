import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Loading } from './loading.component'
import { LOADING_BASE, LOADING_CENTRED } from './loading.variants'

describe('Loading', () => {
  it('renders the spinner icon', () => {
    const { container } = render(<Loading />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies base animate-spin class', () => {
    const { container } = render(<Loading />)
    expect(container.querySelector('svg')).toHaveClass(LOADING_BASE)
  })

  it('does not apply centred classes by default', () => {
    const { container } = render(<Loading />)
    expect(container.querySelector('svg')).not.toHaveClass('absolute')
  })

  it('applies centred classes when centred is true', () => {
    const { container } = render(<Loading centred />)
    const svg = container.querySelector('svg')
    LOADING_CENTRED.split(' ').forEach((cls) => {
      expect(svg).toHaveClass(cls)
    })
  })

  it('applies default color class', () => {
    const { container } = render(<Loading />)
    expect(container.querySelector('svg')).toHaveClass('text-black')
  })

  it('applies color class', () => {
    const { container } = render(<Loading color={'text-white'} />)
    expect(container.querySelector('svg')).toHaveClass('text-white')
  })

  it('applies additional className', () => {
    const { container } = render(<Loading className='text-red-500' />)
    expect(container.querySelector('svg')).toHaveClass('text-red-500')
  })
})
