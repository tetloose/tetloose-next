import { Typography } from '@foundations/Typography/Typography.component'
import { Row } from './Row.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

type TextProps = {
  text?: string
  bg: '#ff6969' | '#7bff69' | '#69b4ff' | '#ffdc69' | '#ff69b4'
}

const Text = ({ text, bg = '#69b4ff' }: TextProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px',
      backgroundColor: bg
    }}
  >
    <Typography
      tag={'span'}
      display={{ default: 'block' }}
      color={'black'}
      size={'body-med'}
      textAlign={{ default: 'center' }}
      text={text}
    />
  </div>
)

const meta: Meta<typeof Row> = {
  title: 'Foundations/Row',
  component: Row,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type ColumnStory = StoryObj<typeof Row>

export const Size: ColumnStory = {
  render: () => (
    <>
      <Row>
        <Row.Column>
          <Text bg={'#ffdc69'} text={'Full width'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 'auto' }}>
          <Text bg={'#ff69b4'} text={'Auto Width'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 1 }}>
          <Text bg={'#ffdc69'} text={'1'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 2 }}>
          <Text bg={'#ff69b4'} text={'2'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 3 }}>
          <Text bg={'#ffdc69'} text={'3'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 4 }}>
          <Text bg={'#ff69b4'} text={'4'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 5 }}>
          <Text bg={'#ffdc69'} text={'5'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 6 }}>
          <Text bg={'#ff69b4'} text={'6'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 7 }}>
          <Text bg={'#ffdc69'} text={'7'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 8 }}>
          <Text bg={'#ff69b4'} text={'8'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 9 }}>
          <Text bg={'#ffdc69'} text={'9'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 10 }}>
          <Text bg={'#ff69b4'} text={'10'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 11 }}>
          <Text bg={'#ffdc69'} text={'11'} />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column width={{ default: 12 }}>
          <Text bg={'#ff69b4'} text={'12'} />
        </Row.Column>
      </Row>
    </>
  )
}

export const Layout: ColumnStory = {
  render: () => (
    <Row tag={'main'}>
      <Row.Column
        tag={'header'}
        border={{ bottom: { default: true } }}
        borderColor={'black'}
      >
        <Text bg={'#69b4ff'} text={'Header'} />
      </Row.Column>
      <Row.Column
        tag={'aside'}
        width={{
          med: 4
        }}
      >
        <Text bg={'#7bff69'} text={'Sidebar'} />
      </Row.Column>
      <Row.Column
        tag={'section'}
        width={{
          med: 8
        }}
      >
        <Text bg={'#ff6969'} text={'Content'} />
      </Row.Column>
      <Row.Column
        tag={'footer'}
        border={{ top: { default: true } }}
        borderColor={'black'}
        height={{ default: 'parent-fullscreen' }}
      >
        <Text bg={'#ff69b4'} text={'Footer'} />
      </Row.Column>
    </Row>
  )
}

export const NestedRows: ColumnStory = {
  render: () => (
    <Row>
      <Row.Column width={{ default: 12 }}>
        <Text bg={'#69b4ff'} text={'Parent Row'} />
        <Row>
          <Row.Column width={{ default: 6 }}>
            <Text bg={'#ff69b4'} text={'Nested 1'} />
          </Row.Column>
          <Row.Column width={{ default: 6 }}>
            <Text bg={'#ffdc69'} text={'Nested 2'} />
          </Row.Column>
        </Row>
      </Row.Column>
    </Row>
  )
}
