import { Box, Text, TextInput, TextInputProps } from '@ewmapp/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
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
          <Text size="sm">Label text</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your text'
  }
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}
export const Prefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'ewm.app.br/'
  }
}
