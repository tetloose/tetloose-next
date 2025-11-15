import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Table } from './Table.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Table> = {
  title: 'Atoms/Table',
  component: Table,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => {
    const title1 = 'Table Title 1'
    const title2 = 'Table Title 2'
    const title3 = 'Table Title 3'

    return (
      <Row>
        <Row.Column
          padding={{
            top: { default: 10 },
            right: { default: 10 },
            bottom: { default: 10 },
            left: { default: 10 }
          }}
        >
          <Table
            layout={'fixed'}
            borderCollapse={'collapse'}
            verticalAlign={'middle'}
          >
            <Table.Item tag={'thead'}>
              <Table.Item tag={'tr'}>
                <Table.Item
                  tag={'th'}
                  border={{
                    top: { default: true },
                    right: { med: true },
                    bottom: { med: true },
                    left: { med: true }
                  }}
                  borderColor={'black'}
                >
                  <Typography tag={'span'} size={'body-med'} text={title1} />
                </Table.Item>
                <Table.Item
                  tag={'th'}
                  border={{
                    top: { default: true },
                    right: { med: true },
                    bottom: { med: true },
                    left: { med: true }
                  }}
                  borderColor={'black'}
                  textAlign={{ med: 'center' }}
                >
                  <Typography tag={'span'} size={'body-med'} text={title2} />
                </Table.Item>
                <Table.Item
                  tag={'th'}
                  border={{
                    top: { default: true },
                    right: { med: true },
                    bottom: { med: true },
                    left: { med: true }
                  }}
                  borderColor={'black'}
                  textAlign={{ med: 'right' }}
                >
                  <Typography tag={'span'} size={'body-med'} text={title3} />
                </Table.Item>
              </Table.Item>
            </Table.Item>
            <Table.Item tag={'tbody'}>
              <Table.Item tag={'tr'}>
                <Table.Item
                  tag={'td'}
                  border={{
                    top: { default: true },
                    right: { med: true },
                    bottom: { med: true },
                    left: { med: true }
                  }}
                  borderColor={'black'}
                >
                  <Table.Title
                    size={'body-lrg'}
                    fontWeight={'bold'}
                    text={title1}
                    padding={{ default: 5 }}
                  />
                  <Typography tag={'span'} size={'body-med'} text={'Tbody'} />
                </Table.Item>
                <Table.Item
                  tag={'td'}
                  bg={'black'}
                  textAlign={{ med: 'center' }}
                >
                  <Table.Title
                    size={'body-lrg'}
                    fontWeight={'bold'}
                    text={title2}
                    color={'white'}
                    padding={{ default: 5 }}
                  />
                  <Typography
                    tag={'span'}
                    size={'body-med'}
                    text={'Tbody'}
                    color={'white'}
                  />
                </Table.Item>
                <Table.Item
                  tag={'td'}
                  border={{
                    top: { default: true },
                    right: { med: true },
                    bottom: { med: true },
                    left: { med: true }
                  }}
                  borderColor={'black'}
                  textAlign={{ med: 'right' }}
                >
                  <Table.Title
                    size={'body-lrg'}
                    fontWeight={'bold'}
                    text={title3}
                    padding={{ default: 5 }}
                  />
                  <Typography tag={'span'} size={'body-med'} text={'Tbody'} />
                </Table.Item>
              </Table.Item>
            </Table.Item>
            <Table.Item tag={'tfoot'}>
              <Table.Item tag={'tr'}>
                <Table.Item
                  tag={'td'}
                  border={{
                    top: { default: true },
                    right: { med: true },
                    bottom: { med: true },
                    left: { med: true }
                  }}
                  borderColor={'black'}
                >
                  <Table.Title
                    size={'body-lrg'}
                    fontWeight={'bold'}
                    text={title1}
                    padding={{ default: 5 }}
                  />
                  <Typography tag={'span'} size={'body-med'} text={'Tfoot'} />
                </Table.Item>
                <Table.Item
                  tag={'td'}
                  border={{
                    top: { default: true },
                    right: { med: true },
                    bottom: { med: true },
                    left: { med: true }
                  }}
                  borderColor={'black'}
                  textAlign={{ med: 'center' }}
                >
                  <Table.Title
                    size={'body-lrg'}
                    fontWeight={'bold'}
                    text={title2}
                    padding={{ default: 5 }}
                  />
                  <Typography tag={'span'} size={'body-med'} text={'Tfoot'} />
                </Table.Item>
                <Table.Item
                  tag={'td'}
                  border={{
                    top: { default: true },
                    right: { med: true },
                    bottom: { med: true },
                    left: { med: true }
                  }}
                  borderColor={'black'}
                  textAlign={{ med: 'right' }}
                >
                  <Table.Title
                    size={'body-lrg'}
                    fontWeight={'bold'}
                    text={title3}
                    padding={{ default: 5 }}
                  />
                  <Typography tag={'span'} size={'body-med'} text={'Tfoot'} />
                </Table.Item>
              </Table.Item>
            </Table.Item>
          </Table>
        </Row.Column>
      </Row>
    )
  }
}
