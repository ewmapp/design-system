import { Text, TextProps } from '@ewmapp/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae perspiciatis assumenda, officia vitae ducimus excepturi possimus veniam magnam error consequatur dicta. Quod, veniam dicta! At corrupti impedit ut iste sed?'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
