import { ComponentProps } from 'react'
import { Input, TextInputContainer } from './style'

export interface TextAreaProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextArea({ prefix, ...props }: TextAreaProps) {
  return (
    <TextInputContainer>
      <Input {...props} />
    </TextInputContainer>
  )
}
