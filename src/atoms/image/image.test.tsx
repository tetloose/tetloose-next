import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Image } from './image.component'

const SRC = '/test-image.jpg'
const ALT = 'Test image'

describe('Image', () => {
  it('renders nothing without src', () => {
    const { container } = render(<Image alt='' />)
    expect(container.firstChild).toBeNull()
  })

  it('renders an image when src is provided', () => {
    render(<Image src={SRC} alt={ALT} width={800} height={600} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('applies alt text', () => {
    render(<Image src={SRC} alt={ALT} width={800} height={600} />)
    expect(screen.getByRole('img')).toHaveAttribute('alt', ALT)
  })

  it('defaults alt to empty string', () => {
    const { container } = render(<Image alt='' src={SRC} width={800} height={600} />)
    expect(container.querySelector('img')).toHaveAttribute('alt', '')
  })

  it('applies base classes', () => {
    const { container } = render(<Image alt='' src={SRC} width={800} height={600} />)
    expect(container.querySelector('img')).toHaveClass('w-full', 'h-auto')
  })

  it('applies fit class', () => {
    render(<Image src={SRC} alt={ALT} width={800} height={600} fit={'object-cover'} />)
    expect(screen.getByRole('img')).toHaveClass('object-cover')
  })

  it('applies position class', () => {
    render(<Image src={SRC} alt={ALT} width={800} height={600} position={'object-center'} />)
    expect(screen.getByRole('img')).toHaveClass('object-center')
  })

  it('applies ratio class', () => {
    render(<Image src={SRC} alt={ALT} width={800} height={600} ratio={'aspect-video'} />)
    expect(screen.getByRole('img')).toHaveClass('aspect-video')
  })

  it('applies additional className', () => {
    render(<Image src={SRC} alt={ALT} width={800} height={600} className={'mt-4'} />)
    expect(screen.getByRole('img')).toHaveClass('mt-4')
  })

  it('applies all props together', () => {
    render(
      <Image
        src={SRC}
        alt={ALT}
        width={800}
        height={600}
        fit={'object-cover'}
        position={'object-left-top'}
        ratio={'aspect-square'}
        className={'mt-4'}
      />
    )
    const img = screen.getByRole('img')
    expect(img).toHaveClass('w-full', 'h-auto', 'object-cover', 'object-left-top', 'aspect-square', 'mt-4')
  })
})
