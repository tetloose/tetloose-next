import { Nav } from './Nav.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Nav> = {
  title: 'Foundations/Nav',
  component: Nav,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Nav>

export const Primary: Story = {
  args: {
    children: (
      <Nav.Ul>
        <Nav.Li>Nav Item 1</Nav.Li>
        <Nav.Li>Nav Item 2</Nav.Li>
        <Nav.Li>Nav Item 3</Nav.Li>
      </Nav.Ul>
    )
  }
}

export const WithModifiers: Story = {
  args: {
    modifiers: ['custom-nav-class'],
    children: (
      <Nav.Ul modifiers={['custom-ul-class']}>
        <Nav.Li modifiers={['custom-li-class']}>Item with modifiers</Nav.Li>
        <Nav.Li>Regular item</Nav.Li>
        <Nav.Li>Another item</Nav.Li>
      </Nav.Ul>
    )
  }
}

export const NestedNav: Story = {
  args: {
    children: (
      <Nav.Ul>
        <Nav.Li>Home</Nav.Li>
        <Nav.Li>
          Products
          <Nav.Ul>
            <Nav.Li>Product 1</Nav.Li>
            <Nav.Li>Product 2</Nav.Li>
            <Nav.Li>Product 3</Nav.Li>
          </Nav.Ul>
        </Nav.Li>
        <Nav.Li>About</Nav.Li>
        <Nav.Li>Contact</Nav.Li>
      </Nav.Ul>
    )
  }
}
