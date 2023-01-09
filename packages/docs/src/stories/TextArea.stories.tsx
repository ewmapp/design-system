import { Box, Text, TextArea, TextAreaProps } from '@ewmapp/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    Story => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2'
          }}
        >
          <Text size="sm">Label textarea</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your long text'
  }
}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}
