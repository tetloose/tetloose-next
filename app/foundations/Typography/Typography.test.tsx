import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Typography } from './Typography.component'

describe('Typography', () => {
  it('renders with default props', () => {
    render(
      <Typography
        tag={'h1'}
        size={'h1'}
        text={'Hello World'}
        color={'black'}
        fontWeight={'bold'}
        modifiers={['custom-modifier']}
        data-testid={'typography-test'}
        aria-label={'Main Heading'}
      />
    )

    const typographyElement = screen.getByRole('heading', { level: 1 })
    expect(typographyElement).toBeInTheDocument()
    expect(typographyElement.className).toContain('typography')
    expect(typographyElement.className).toContain('h1')
    expect(typographyElement.className).toContain('color-black')
    expect(typographyElement.className).toContain('font-weight-bold')
    expect(typographyElement).toHaveClass('custom-modifier')
    expect(typographyElement).toHaveAttribute('data-testid', 'typography-test')
    expect(typographyElement).toHaveAttribute('aria-label', 'Main Heading')
    expect(typographyElement.textContent).toBe('Hello World')
  })

  it('renders different heading levels', () => {
    const { container: h2Container } = render(
      <Typography tag={'h2'} size={'h2'} text={'Heading 2'} />
    )
    const h2Element = h2Container.querySelector('h2')
    expect(h2Element).toBeInTheDocument()
    expect(h2Element?.className).toContain('h2')

    const { container: h3Container } = render(
      <Typography tag={'h3'} size={'h3'} text={'Heading 3'} />
    )
    const h3Element = h3Container.querySelector('h3')
    expect(h3Element).toBeInTheDocument()
    expect(h3Element?.className).toContain('h3')
  })

  it('renders with children instead of text prop', () => {
    render(
      <Typography tag={'span'} size={'body-sml'}>
        <strong>Child content</strong>
      </Typography>
    )
    const strongElement = screen.getByText('Child content')
    expect(strongElement).toBeInTheDocument()
    expect(strongElement.tagName).toBe('STRONG')
  })

  it('renders with text transformations', () => {
    const { container } = render(
      <Typography
        tag={'span'}
        text={'transformed text'}
        textTransform={'uppercase'}
      />
    )
    const spanElement = container.querySelector('span')
    expect(spanElement?.className).toContain('text-transform-uppercase')
  })

  it('renders with font styles', () => {
    const { container } = render(
      <Typography tag={'span'} text={'italic text'} fontStyle={'italic'} />
    )
    const spanElement = container.querySelector('span')
    expect(spanElement?.className).toContain('font-style-italic')
  })

  it('renders richText mode', () => {
    render(
      <Typography
        richText={'<p>Rich <strong>HTML</strong> content</p>'}
        data-testid={'rich-text'}
      />
    )
    const richTextElement = screen.getByTestId('rich-text')
    expect(richTextElement).toBeInTheDocument()
  })

  it('renders lists', () => {
    const { container } = render(
      <Typography tag={'ul'}>
        <Typography tag={'li'} text={'Item 1'} />
        <Typography tag={'li'} text={'Item 2'} />
      </Typography>
    )
    const ulElement = container.querySelector('ul')
    expect(ulElement).toBeInTheDocument()
    expect(ulElement?.className).toContain('ul')
  })
})
