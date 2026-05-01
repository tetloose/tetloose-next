import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Notification } from './notification.component'

vi.mock('react-hot-toast', () => ({
  Toaster: ({ position }: { position?: string }) => <div data-testid={'toaster'} data-position={position} />
}))

describe('Notification', () => {
  it('renders the toaster', () => {
    const { getByTestId } = render(<Notification />)
    expect(getByTestId('toaster')).toBeInTheDocument()
  })

  it('passes position prop to Toaster', () => {
    const { getByTestId } = render(<Notification position={'bottom-center'} />)
    expect(getByTestId('toaster')).toHaveAttribute('data-position', 'bottom-center')
  })
})
