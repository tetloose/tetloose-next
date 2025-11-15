import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Row } from './Row.component'

describe('Row', () => {
  it('renders with default props', () => {
    render(
      <Row
        tag={'section'}
        bg={'black'}
        align={{ default: 'center' }}
        justify={{ default: 'space-between' }}
        padding={{
          left: { default: 6 },
          right: { default: 6 }
        }}
        modifiers={['custom-modifier']}
        data-testid={'row-wrapper'}
        aria-label={'Main Row'}
      >
        <Row.Column
          tag={'article'}
          bg={'white'}
          width={{ default: 6 }}
          padding={{
            left: { default: 3 },
            right: { default: 3 }
          }}
          modifiers={['column-modifier']}
          data-testid={'row-column'}
        >
          Column content
        </Row.Column>
      </Row>
    )

    const rowElement = screen.getByRole('region')
    expect(rowElement).toBeInTheDocument()
    expect(rowElement.className).toContain('row')
    expect(rowElement.className).toContain('bg-black')
    expect(rowElement).toHaveClass('custom-modifier')
    expect(rowElement).toHaveAttribute('data-testid', 'row-wrapper')
    expect(rowElement).toHaveAttribute('aria-label', 'Main Row')

    const columnElement = screen.getByTestId('row-column')
    expect(columnElement).toBeInTheDocument()
    expect(columnElement.className).toContain('row__column')
    expect(columnElement.className).toContain('bg-white')
    expect(columnElement).toHaveClass('column-modifier')
    expect(columnElement.tagName).toBe('ARTICLE')
  })
})

describe('Row.Column', () => {
  it('renders with different widths', () => {
    render(
      <Row>
        <Row.Column width={{ default: 12 }} data-testid={'col-12'}>
          Full width
        </Row.Column>
      </Row>
    )

    const columnElement = screen.getByTestId('col-12')
    expect(columnElement).toBeInTheDocument()
    expect(columnElement.className).toContain('row__column')
  })

  it('renders with borders', () => {
    render(
      <Row>
        <Row.Column
          width={{ default: 6 }}
          border={{ right: { default: true } }}
          borderColor={'black'}
          data-testid={'bordered-column'}
        >
          Bordered column
        </Row.Column>
      </Row>
    )

    const columnElement = screen.getByTestId('bordered-column')
    expect(columnElement).toBeInTheDocument()
  })
})
