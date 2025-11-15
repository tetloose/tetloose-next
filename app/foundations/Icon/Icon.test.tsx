import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Icon } from './Icon.component'

describe('Icon', () => {
  it('renders with default props', () => {
    const { container } = render(
      <Icon
        name={'happy'}
        size={'med'}
        color={'black'}
        modifiers={['custom-modifier']}
        data-testid={'icon-test'}
        aria-label={'Happy Icon'}
      />
    )

    const iconElement = container.querySelector('i')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement?.className).toContain('icon')
    expect(iconElement?.className).toContain('happy')
    expect(iconElement?.className).toContain('is-med')
    expect(iconElement?.className).toContain('black')
    expect(iconElement).toHaveClass('custom-modifier')
    expect(iconElement).toHaveAttribute('data-testid', 'icon-test')
    expect(iconElement).toHaveAttribute('aria-label', 'Happy Icon')
  })

  it('renders with different sizes', () => {
    const { container: containerSml } = render(
      <Icon name={'happy'} size={'sml'} />
    )
    const iconSml = containerSml.querySelector('i')
    expect(iconSml?.className).toContain('is-sml')

    const { container: containerLrg } = render(
      <Icon name={'happy'} size={'lrg'} />
    )
    const iconLrg = containerLrg.querySelector('i')
    expect(iconLrg?.className).toContain('is-lrg')
  })

  it('renders different icon names', () => {
    const { container } = render(<Icon name={'angry'} />)
    const iconElement = container.querySelector('i')
    expect(iconElement?.className).toContain('angry')
  })
})
