import { Box, BoxProps, Text } from '@ewmapp/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    variant: 'dark',
    children: (
      <>
        <Text>Element Box and text</Text>
      </>
    )
  },
  argTypes: {
    children: {
      control: { type: null }
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
