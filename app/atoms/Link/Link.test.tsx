import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context/App/App.context'
import { Link } from './Link.component'

describe('Link component', () => {
  it('renders Link component with a modifier', () => {
    const { container } = render(
      <AppProvider>
        <Link
          modifiers={['test-modifier']}
          variant={'primary'}
          href={'http://google.com'}
        />
      </AppProvider>
    )

    const element = container.querySelector('.test-modifier')

    expect(element?.classList.contains('test-modifier')).toBe(true)
  })
})
