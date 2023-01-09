import { Home } from '@ewmapp/react-native'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Native/Home',
  component: Home,

  decorators: [
    Story => {
      return <>{Story()}</>
    }
  ]
} as Meta

export const Primary: StoryObj = {}
