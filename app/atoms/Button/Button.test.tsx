import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button.component'

describe('Button', () => {
  it('renders with default props', () => {
    render(
      <Button
        variant={'primary'}
        label={'Click me'}
        width={{ default: 'auto' }}
        modifiers={['custom-modifier']}
        data-testid={'button-test'}
        aria-label={'Test Button'}
      />
    )

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveAttribute('type', 'button')
    expect(buttonElement.className).toContain('button')
    expect(buttonElement.className).toContain('primary')
    expect(buttonElement).toHaveClass('custom-modifier')
    expect(buttonElement).toHaveAttribute('data-testid', 'button-test')
    expect(buttonElement).toHaveAttribute('aria-label', 'Test Button')
    expect(buttonElement.textContent).toBe('Click me')
  })

  it('renders with different variants', () => {
    const { container: primaryContainer } = render(
      <Button variant={'primary'} label={'Primary'} />
    )
    const primaryButton = primaryContainer.querySelector('button')
    expect(primaryButton?.className).toContain('primary')

    const { container: secondaryContainer } = render(
      <Button variant={'secondary'} label={'Secondary'} />
    )
    const secondaryButton = secondaryContainer.querySelector('button')
    expect(secondaryButton?.className).toContain('secondary')
  })

  it('renders with different types', () => {
    const { container: submitContainer } = render(
      <Button type={'submit'} label={'Submit'} />
    )
    const submitButton = submitContainer.querySelector('button')
    expect(submitButton).toHaveAttribute('type', 'submit')

    const { container: resetContainer } = render(
      <Button type={'reset'} label={'Reset'} />
    )
    const resetButton = resetContainer.querySelector('button')
    expect(resetButton).toHaveAttribute('type', 'reset')
  })

  it('renders with children', () => {
    render(
      <Button variant={'primary'}>
        <span>Child content</span>
      </Button>
    )
    const childContent = screen.getByText('Child content')
    expect(childContent).toBeInTheDocument()
  })

  it('handles disabled state', () => {
    render(<Button label={'Disabled'} disabled={true} />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeDisabled()
  })
})

describe('Button.Link', () => {
  it('renders with default props', () => {
    render(
      <Button.Link
        variant={'primary'}
        href={'/test-page'}
        label={'Link Button'}
        width={{ default: 'auto' }}
        modifiers={['custom-modifier']}
        data-testid={'button-link-test'}
      />
    )

    const linkElement = screen.getByTestId('button-link-test')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.className).toContain('button')
    expect(linkElement.className).toContain('primary')
    expect(linkElement).toHaveClass('custom-modifier')
    expect(linkElement).toHaveAttribute('href', '/test-page')
    expect(linkElement.textContent).toBe('Link Button')
  })

  it('renders with external link', () => {
    render(
      <Button.Link
        variant={'secondary'}
        href={'https://google.com'}
        target={'_blank'}
        label={'External Link'}
        data-testid={'external-link'}
      />
    )

    const linkElement = screen.getByTestId('external-link')
    expect(linkElement).toHaveAttribute('href', 'https://google.com')
    expect(linkElement).toHaveAttribute('target', '_blank')
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders with custom rel', () => {
    render(
      <Button.Link
        href={'/test'}
        rel={'nofollow'}
        label={'Custom Rel'}
        data-testid={'custom-rel'}
      />
    )

    const linkElement = screen.getByTestId('custom-rel')
    expect(linkElement).toHaveAttribute('rel', 'nofollow')
  })

  it('renders with children', () => {
    render(
      <Button.Link href={'/test'}>
        <span>Link child content</span>
      </Button.Link>
    )
    const childContent = screen.getByText('Link child content')
    expect(childContent).toBeInTheDocument()
  })
})
