import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Form } from './form.component'

describe('Form', () => {
  it('renders a form element', () => {
    render(
      <Form data-testid={'form'}>
        <input />
      </Form>
    )
    expect(screen.getByTestId('form')).toBeInTheDocument()
  })

  it('applies className', () => {
    render(
      <Form className={'mt-4'} data-testid={'form'}>
        <input />
      </Form>
    )
    expect(screen.getByTestId('form')).toHaveClass('mt-4')
  })

  it('renders nothing without children', () => {
    const { container } = render(<Form />)
    expect(container.firstChild).toBeNull()
  })
})

describe('Form.Label', () => {
  it('renders a label element', () => {
    render(<Form.Label label={'Username'} />)
    expect(screen.getByText('Username')).toBeInTheDocument()
  })

  it('applies className', () => {
    render(<Form.Label className={'mt-2'} label={'Name'} data-testid={'label'} />)
    expect(screen.getByTestId('label')).toHaveClass('mt-2')
  })

  it('renders children', () => {
    render(
      <Form.Label>
        <input data-testid={'input'} />
      </Form.Label>
    )
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('applies error classes when error is true', () => {
    render(<Form.Label error label={'Name'} data-testid={'label'} />)
    expect(screen.getByTestId('label')).toHaveClass('text-red-500')
  })
})

describe('Form.Input', () => {
  it('renders an input element', () => {
    render(<Form.Input data-testid={'input'} />)
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('defaults to type text', () => {
    render(<Form.Input data-testid={'input'} />)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'text')
  })

  it('applies className', () => {
    render(<Form.Input className={'mt-2'} data-testid={'input'} />)
    expect(screen.getByTestId('input')).toHaveClass('mt-2')
  })

  it('applies error classes and aria-invalid when error is true', () => {
    render(<Form.Input error data-testid={'input'} />)
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveClass('border-red-500', 'bg-red-50')
    expect(input).not.toHaveClass('bg-white')
  })
})

describe('Form.Textarea', () => {
  it('renders a textarea element', () => {
    render(<Form.Textarea data-testid={'textarea'} />)
    expect(screen.getByTestId('textarea')).toBeInTheDocument()
  })

  it('applies className', () => {
    render(<Form.Textarea className={'h-32'} data-testid={'textarea'} />)
    expect(screen.getByTestId('textarea')).toHaveClass('h-32')
  })

  it('applies error classes and aria-invalid when error is true', () => {
    render(<Form.Textarea error data-testid={'textarea'} />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(textarea).toHaveClass('border-red-500', 'bg-red-50')
    expect(textarea).not.toHaveClass('bg-white')
  })
})

describe('Form.Select', () => {
  const options = [
    { text: 'Option A', value: 'a' },
    { text: 'Option B', value: 'b' }
  ]

  it('renders a select element', () => {
    render(<Form.Select options={options} data-testid={'select'} />)
    expect(screen.getByTestId('select')).toBeInTheDocument()
  })

  it('renders options', () => {
    render(<Form.Select options={options} />)
    expect(screen.getByText('Option A')).toBeInTheDocument()
    expect(screen.getByText('Option B')).toBeInTheDocument()
  })

  it('applies className', () => {
    render(<Form.Select options={options} className={'mt-2'} data-testid={'select'} />)
    expect(screen.getByTestId('select')).toHaveClass('mt-2')
  })

  it('applies error classes and aria-invalid when error is true', () => {
    render(<Form.Select options={options} error data-testid={'select'} />)
    const select = screen.getByTestId('select')
    expect(select).toHaveAttribute('aria-invalid', 'true')
    expect(select).toHaveClass('border-red-500', 'bg-red-50')
    expect(select).not.toHaveClass('bg-white')
  })
})

describe('Form.Radio', () => {
  it('renders a radio input', () => {
    render(<Form.Radio label={'Yes'} />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('renders label text', () => {
    render(<Form.Radio label={'Yes'} />)
    expect(screen.getByText('Yes')).toBeInTheDocument()
  })
})

describe('Form.Checkbox', () => {
  it('renders a checkbox input', () => {
    render(<Form.Checkbox label={'Accept'} />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders label text', () => {
    render(<Form.Checkbox label={'Accept'} />)
    expect(screen.getByText('Accept')).toBeInTheDocument()
  })

  it('applies error classes when error is true', () => {
    render(<Form.Checkbox label={'Accept'} error />)
    expect(screen.getByText('Accept').closest('label')).toHaveClass('text-red-500')
  })
})
