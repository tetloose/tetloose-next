import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppProvider } from '@context/App/App.context'
import { Nav } from './Nav.component'

describe('Nav component', () => {
  it('renders Nav component with a modifier', () => {
    const { container } = render(
      <AppProvider>
        <Nav modifiers={['test-modifier']} />
      </AppProvider>
    )

    const element = container.querySelector('.test-modifier')

    expect(element?.classList.contains('test-modifier')).toBe(true)
  })
})
