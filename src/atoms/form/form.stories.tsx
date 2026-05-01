import { useForm } from 'react-hook-form'
import { useNotification } from '@hooks/notification/use-notification.hooks'
import { Form } from './form.component'
import { formDefaultValues, formSelectOptions } from './form.mock'
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

type Inputs = {
  username: string
  email: string
  password: string
  message: string
  color: string
  accept: boolean
}

const RenderForm = () => {
  const notify = useNotification()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<Inputs>({ defaultValues: formDefaultValues, mode: 'onChange' })

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault()
    notify(JSON.stringify(data), 'success')
    reset()
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => {
        notify('Reset', 'success')
        reset()
      }}
    >
      <Form.Label htmlFor={'color'} label={'Favourite colour'} error={!!errors.color} />
      <Form.Select
        id={'color'}
        options={formSelectOptions}
        error={!!errors.color}
        {...register('color', { required: true })}
      />
      <Form.Label htmlFor={'username'} label={'Username'} error={!!errors.username} />
      <Form.Input
        id={'username'}
        placeholder={'Username'}
        error={!!errors.username}
        {...register('username', { required: true })}
      />
      <Form.Label htmlFor={'email'} label={'Email'} error={!!errors.email} />
      <Form.Input
        id={'email'}
        type={'email'}
        placeholder={'Email'}
        error={!!errors.email}
        {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
      />
      <Form.Label htmlFor={'password'} label={'Password'} error={!!errors.password} />
      <Form.Input
        id={'password'}
        type={'password'}
        placeholder={'Password'}
        error={!!errors.password}
        {...register('password', { required: true })}
      />
      <Form.Label htmlFor={'message'} label={'Message'} error={!!errors.message} />
      <Form.Textarea
        id={'message'}
        placeholder={'Enter your message'}
        error={!!errors.message}
        {...register('message', { required: true })}
      />
      <Form.Radio
        id={'yellow'}
        value={'yellow'}
        label={'Yellow'}
        error={!!errors.color}
        {...register('color', { required: true })}
      />
      <Form.Radio
        id={'blue'}
        value={'blue'}
        label={'Blue'}
        error={!!errors.color}
        {...register('color', { required: true })}
      />
      <Form.Checkbox
        id={'accept'}
        label={'Accept terms'}
        error={!!errors.accept}
        {...register('accept', { required: true })}
      />
      <Form.Actions
        submit={{ variant: 'primary', label: 'Submit', disabled: !isValid }}
        reset={{ variant: 'secondary', label: 'Reset' }}
      />
    </Form>
  )
}

export const Default: Story = {
  render: () => <RenderForm />
}
