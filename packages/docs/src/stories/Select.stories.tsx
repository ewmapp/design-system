import { Box, Select, SelectProps } from '@ewmapp/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Select',
  component: Select,
  args: {},
  argTypes: {
    onSelect: { action: 'selected' }
  },
  decorators: [
    Story => {
      return <Box>{Story()}</Box>
    }
  ]
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {}
