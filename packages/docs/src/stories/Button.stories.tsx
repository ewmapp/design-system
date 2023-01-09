import { Button, ButtonTextProps } from '@ewmapp/react'
import { Meta, StoryObj } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'send'
  },
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
      ],
      control: { type: 'select' }
    },
    outlined: { control: { type: 'boolean' } },
    disable: { control: { type: 'boolean' } },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    onClick: { action: 'clicked' }
  }
} as Meta<ButtonTextProps>

export const Primary: StoryObj<ButtonTextProps> = {}
export const Secondary: StoryObj<ButtonTextProps> = {
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}
export const Success: StoryObj<ButtonTextProps> = {
  args: {
    variant: 'success',
    children: 'Success'
  }
}
export const Danger: StoryObj<ButtonTextProps> = {
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}
export const Warning: StoryObj<ButtonTextProps> = {
  args: {
    variant: 'warning',
    children: 'Warning'
  }
}
export const Info: StoryObj<ButtonTextProps> = {
  args: {
    variant: 'info',
    children: 'Info'
  }
}
export const Light: StoryObj<ButtonTextProps> = {
  args: {
    variant: 'light',
    children: 'Light'
  }
}
export const Dark: StoryObj<ButtonTextProps> = {
  args: {
    variant: 'dark',
    children: 'Dark'
  }
}
export const WithIcon: StoryObj<ButtonTextProps> = {
  args: {
    children: (
      <>
        Steep
        <ArrowRight weight="bold" />
      </>
    )
  }
}
