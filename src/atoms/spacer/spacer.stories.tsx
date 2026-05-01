import { GLOBAL_DISPLAY, GLOBAL_MARGIN_TOP, GLOBAL_PADDING_TOP } from '@global/global.constants'
import { Typography } from '@atoms/typography/typography.component'
import { Spacer } from './spacer.component'
import { spacerMock } from './spacer.mock'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Spacer> = {
  title: 'Atoms/Spacer',
  component: Spacer,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    marginTop: {
      control: 'select',
      options: [undefined, ...GLOBAL_MARGIN_TOP]
    },
    paddingTop: {
      control: 'select',
      options: [undefined, ...GLOBAL_PADDING_TOP]
    },
    display: {
      control: 'select',
      options: [undefined, ...GLOBAL_DISPLAY]
    }
  }
}

export default meta

type Story = StoryObj<typeof Spacer>

export const Default: Story = {
  args: spacerMock,
  render: (args) => (
    <Spacer {...args}>
      <Typography tag={'h1'} text={'Dolor sit amet consectetur adipisicing elit'} />
      <Spacer {...args} />
      <Typography
        tag={'p'}
        text={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis provident repudiandae similique quasi id quae vel modi maiores aperiam est praesentium adipisci reprehenderit, quas veniam quis facere velit tempora quod!'
        }
      />
    </Spacer>
  )
}
