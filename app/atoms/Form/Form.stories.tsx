import { useForm, useWatch } from 'react-hook-form'
import { useNotification } from '@hooks/Notification/use-notification.hooks'
import { Row } from '@foundations/Row/Row.component'
import { Typography } from '@foundations/Typography/Typography.component'
import { Form } from './Form.component'
import type { Options } from './Form.types'
import type { FormVariant } from './Form.types'
import type { GlobalColor } from '@global/global.types'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { SubmitHandler } from 'react-hook-form'

const meta: Meta<typeof Form> = {
  title: 'Atoms/Form',
  component: Form,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
}

export default meta

type Story = StoryObj<typeof Form>

type RenderFormProps = FormVariant & GlobalColor

const RenderForm = ({ variant, color }: RenderFormProps) => {
  type Inputs = {
    username: string
    password: string
    message: string
    colors: string
    accept: string
    favouriteColor: string
  }

  const defaultValues: Inputs = {
    username: '',
    password: '',
    message: '',
    colors: '',
    accept: '',
    favouriteColor: ''
  }

  const notify = useNotification()

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid }
  } = useForm<Inputs>({ defaultValues, mode: 'onChange' })

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault()

    if (!data) return

    const { favouriteColor, username, password, message, colors, accept } = data

    if (favouriteColor) notify(`favouriteColor: ${favouriteColor}`, 'success')

    if (username) notify(`username: ${username}`, 'success')

    if (password) notify(`password: ${password}`, 'success')

    if (password) notify(`message: ${message}`, 'success')

    if (colors) notify(`colors: ${colors}`, 'success')

    if (accept) notify(`accept: ${accept && 'accepted'}`, 'success')

    reset()
  }

  const handleReset = () => {
    notify('Form Reset', 'success')

    reset()
  }

  const {
    favouriteColor: favouriteColorError,
    username: usernameError,
    password: passwordError,
    colors: colorsError,
    message: messageError,
    accept: acceptError
  } = errors

  const selectOptions: Options[] = [
    {
      text: 'What is your favourite color',
      value: ''
    },
    {
      text: 'Blue',
      value: 'blue'
    },
    {
      text: 'Green',
      value: 'green'
    },
    {
      text: 'Hotpink',
      value: 'hotpink'
    }
  ]

  const watchedFavouriteColor =
    useWatch({ control, name: 'favouriteColor' }) ?? ''
  const watchedUsername = useWatch({ control, name: 'username' }) ?? ''
  const watchedPassword = useWatch({ control, name: 'password' }) ?? ''
  const watchedColors = useWatch({ control, name: 'colors' }) ?? ''
  const watchedMessage = useWatch({ control, name: 'message' }) ?? ''
  const watchedAccept = useWatch({ control, name: 'accept' }) ?? ''

  return (
    <Row>
      <Row.Column>
        <Form onSubmit={handleSubmit(onSubmit)} onReset={handleReset}>
          <Form.Label
            htmlFor={'favouriteColor'}
            label={{
              color: favouriteColorError ? 'red' : color,
              text: `Favourite Color${favouriteColorError ? ': (required)' : ''}`,
              size: 'body-med',
              fontWeight: 'medium'
            }}
            error={!!favouriteColorError}
          />
          <Form.Select
            variant={variant}
            padding={{ default: 2 }}
            id={'favouriteColor'}
            options={selectOptions}
            error={!!favouriteColorError}
            {...register('favouriteColor', { required: true })}
          />
          <Form.Label
            padding={{ default: 6 }}
            htmlFor={'username'}
            label={{
              color: usernameError ? 'red' : color,
              text: `Username${usernameError ? ': (required)' : ''}`,
              size: 'body-med',
              fontWeight: 'medium'
            }}
            error={!!usernameError}
          />
          <Form.Input
            variant={variant}
            padding={{ default: 2 }}
            placeholder={'Username'}
            id={'username'}
            error={!!usernameError}
            {...register('username', { required: true })}
          />
          <Form.Label
            padding={{ default: 6 }}
            htmlFor={'password'}
            label={{
              color: passwordError ? 'red' : color,
              text: `Password${passwordError ? ': (required)' : ''}`,
              size: 'body-med',
              fontWeight: 'medium'
            }}
            error={!!passwordError}
          />
          <Form.Input
            variant={variant}
            padding={{ default: 2 }}
            type={'password'}
            placeholder={'Password'}
            id={'password'}
            error={!!passwordError}
            {...register('password', { required: true })}
          />
          <Form.Label
            padding={{ default: 6 }}
            htmlFor={'yellow'}
            label={{
              color: colorsError ? 'red' : color,
              text: `Select Color${colorsError ? ': (required)' : ''}`,
              size: 'body-med',
              fontWeight: 'medium'
            }}
            error={!!colorsError}
          />
          <Form.Radio
            padding={{ default: 2 }}
            htmlFor={'yellow'}
            id={'yellow'}
            value={'yellow'}
            label={{
              color: color,
              text: 'Yellow',
              size: 'body-med'
            }}
            error={!!colorsError}
            {...register('colors', { required: true })}
          />
          <Form.Radio
            padding={{ default: 2 }}
            htmlFor={'blue'}
            id={'blue'}
            value={'blue'}
            label={{
              color: color,
              text: 'Blue',
              size: 'body-med'
            }}
            error={!!colorsError}
            {...register('colors', { required: true })}
          />
          <Form.Radio
            padding={{ default: 2 }}
            htmlFor={'green'}
            id={'green'}
            value={'green'}
            label={{
              color: color,
              text: 'Green',
              size: 'body-med'
            }}
            error={!!colorsError}
            {...register('colors', { required: true })}
          />
          <Form.Label
            padding={{ default: 6 }}
            htmlFor={'message'}
            label={{
              color: messageError ? 'red' : color,
              text: `Message${messageError ? ': (required)' : ''}`,
              size: 'body-med',
              fontWeight: 'medium'
            }}
            error={!!messageError}
          />
          <Form.Textarea
            variant={variant}
            padding={{ default: 2 }}
            placeholder={'Enter your message'}
            id={'message'}
            error={!!messageError}
            {...register('message', { required: true })}
          />
          <Form.Label
            padding={{ default: 6 }}
            htmlFor={'accept'}
            label={{
              color: acceptError ? 'red' : color,
              text: `Accept ${acceptError ? ': (required)' : ''}`,
              size: 'body-med',
              fontWeight: 'medium'
            }}
            error={!!acceptError}
          />
          <Form.Checkbox
            padding={{ default: 2 }}
            htmlFor={'accept'}
            id={'accept'}
            value={'true'}
            label={{
              color: color,
              text: 'Accept',
              size: 'body-med'
            }}
            error={!!acceptError}
            {...register('accept', { required: true })}
          />
          <Typography
            color={color}
            size={'body-sml'}
            padding={{ default: 10 }}
            richText={`<p>Watch Favourite Color: ${watchedFavouriteColor}<br />
              Watch Username: ${watchedUsername}<br />
              Watch Password: ${watchedPassword}<br />
              Watch Colors: ${watchedColors}<br />
              Watch Message: ${watchedMessage}<br />
              Watch Accept: ${watchedAccept}</p>`}
          />
          <Form.Actions
            layout={{
              display: {
                default: 'flex'
              },
              gap: {
                default: 6
              },
              justify: { default: 'flex-end' },
              padding: {
                top: {
                  default: 6
                }
              }
            }}
            submit={{
              variant: 'primary',
              label: 'Submit',
              disabled: !isValid
            }}
            reset={{
              variant: 'secondary',
              label: 'reset'
            }}
          />
        </Form>
      </Row.Column>
    </Row>
  )
}

export const Primary: Story = {
  render: () =>
    RenderForm({
      variant: 'primary',
      color: 'black'
    })
}
