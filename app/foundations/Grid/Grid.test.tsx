import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Grid } from './Grid.component'

describe('Grid', () => {
  it('renders with default props', () => {
    const { container } = render(
      <Grid
        tag={'main'}
        bg={'black'}
        rows={{ default: ['60px', 'auto', '40px'] }}
        columns={{ default: [0.5, 1.5] }}
        height={{ default: 'viewport-fullscreen' }}
        modifiers={['custom-modifier']}
        data-testid={'grid-wrapper'}
        aria-label={'Main Grid'}
      >
        <Grid.Item
          tag={'section'}
          bg={'black'}
          rows={{ default: [1] }}
          columns={{ default: [1, 3] }}
          modifiers={['item-modifier']}
          data-testid={'grid-item'}
        >
          Grid content
        </Grid.Item>
      </Grid>
    )

    const gridElement = screen.getByRole('main')
    expect(gridElement).toBeInTheDocument()
    expect(gridElement.className).toContain('grid')
    expect(gridElement.className).toContain('bg-black')
    expect(gridElement).toHaveClass('custom-modifier')
    expect(gridElement).toHaveAttribute('data-testid', 'grid-wrapper')
    expect(gridElement).toHaveAttribute('aria-label', 'Main Grid')

    const gridItem = screen.getByTestId('grid-item')
    expect(gridItem).toBeInTheDocument()
    expect(gridItem.className).toContain('grid__item')
    expect(gridItem.className).toContain('bg-black')
    expect(gridItem).toHaveClass('item-modifier')
    expect(gridItem.tagName).toBe('SECTION')

    const styleElement = container.querySelector('style')
    expect(styleElement).toBeInTheDocument()
  })
})
