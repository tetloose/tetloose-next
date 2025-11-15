import { useNotification } from '@hooks/Notification/use-notification.hooks'
import { Icon } from '@foundations/Icon/Icon.component'
import { Row } from '@foundations/Row/Row.component'
import { Button } from './Button.component'
import type { ButtonProps } from './Button.types'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const RenderButton = (args: ButtonProps) => {
  const notify = useNotification()

  const handleClick = () => {
    notify('Button Clicked', 'success')
  }

  return <Button {...args} onClick={handleClick} />
}

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    onClick: { action: 'clicked' }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
  args: {
    label: 'No Style'
  }
}

export const Links: Story = {
  render: () => (
    <Row>
      <Row.Column
        display={{ default: 'flex' }}
        gap={{ default: 6 }}
        direction={{ default: 'column', med: 'row' }}
        padding={{ top: { default: 6 } }}
      >
        <Button.Link
          variant={'primary'}
          href={'https://google.com'}
          target={'_blank'}
          label={'Primary Link'}
          fontWeight={'bold'}
          textAlign={{ default: 'center', med: 'left' }}
          textTransform={'uppercase'}
          align={{ default: 'center' }}
          justify={{ default: 'center', med: 'flex-start' }}
        />
        <Button.Link
          variant={'secondary'}
          width={{ default: 'full', med: 'auto' }}
          href={'https://google.com'}
          target={'_blank'}
          label={'Secondary Link'}
          fontWeight={'bold'}
          textAlign={{ default: 'center', med: 'left' }}
          textTransform={'uppercase'}
          align={{ default: 'center' }}
          justify={{ default: 'center', med: 'flex-start' }}
        />
      </Row.Column>
    </Row>
  )
}

export const Buttons: Story = {
  render: () => (
    <Row>
      <Row.Column
        display={{ default: 'flex' }}
        gap={{ default: 6 }}
        direction={{ default: 'column', med: 'row' }}
        padding={{ top: { default: 6 } }}
      >
        <RenderButton
          variant={'primary'}
          label={'Primary'}
          fontWeight={'bold'}
          textAlign={{ default: 'center', med: 'left' }}
          textTransform={'uppercase'}
          align={{ default: 'center' }}
          justify={{ default: 'center', med: 'flex-start' }}
        />
        <RenderButton
          variant={'primary'}
          fontWeight={'bold'}
          textAlign={{ default: 'center', med: 'left' }}
          textTransform={'uppercase'}
          align={{ default: 'center' }}
          justify={{ default: 'center', med: 'flex-start' }}
          gap={{ default: 2 }}
        >
          <Icon size={'sml'} name={'angry'} />
          Primary Icon Left Button
        </RenderButton>
        <RenderButton
          variant={'primary'}
          fontWeight={'bold'}
          textAlign={{ default: 'center', med: 'left' }}
          textTransform={'uppercase'}
          align={{ default: 'center' }}
          justify={{ default: 'center', med: 'flex-start' }}
          gap={{ default: 2 }}
        >
          Primary Icon Right Button
          <Icon size={'sml'} name={'angry'} />
        </RenderButton>
        <RenderButton
          variant={'primary'}
          label={'Primary Disabled'}
          fontWeight={'bold'}
          textAlign={{ default: 'center', med: 'left' }}
          textTransform={'uppercase'}
          align={{ default: 'center' }}
          justify={{ default: 'center', med: 'flex-start' }}
          disabled={true}
        />
      </Row.Column>
      <Row.Column
        display={{ default: 'flex' }}
        gap={{ default: 6 }}
        direction={{ default: 'column', med: 'row' }}
        padding={{ top: { default: 6 } }}
      >
        <RenderButton
          variant={'secondary'}
          label={'Secondary'}
          fontWeight={'bold'}
          textAlign={{ default: 'center', med: 'left' }}
          textTransform={'uppercase'}
          align={{ default: 'center' }}
          justify={{ default: 'center', med: 'flex-start' }}
        />
        <RenderButton
          variant={'secondary'}
          fontWeight={'bold'}
          textAlign={{ default: 'center', med: 'left' }}
          textTransform={'uppercase'}
          align={{ default: 'center' }}
          justify={{ default: 'center', med: 'flex-start' }}
          gap={{ default: 2 }}
        >
          <Icon size={'sml'} name={'angry'} />
          Secondary Icon Left Button
        </RenderButton>
        <RenderButton
          variant={'secondary'}
          fontWeight={'bold'}
          textAlign={{ default: 'center', med: 'left' }}
          textTransform={'uppercase'}
          align={{ default: 'center' }}
          justify={{ default: 'center', med: 'flex-start' }}
          gap={{ default: 2 }}
        >
          Secondary Icon Right Button
          <Icon size={'sml'} name={'angry'} />
        </RenderButton>
        <RenderButton
          variant={'secondary'}
          label={'Secondary Disabled'}
          fontWeight={'bold'}
          textAlign={{ default: 'center', med: 'left' }}
          textTransform={'uppercase'}
          align={{ default: 'center' }}
          justify={{ default: 'center', med: 'flex-start' }}
          disabled={true}
        />
      </Row.Column>
    </Row>
  )
}
