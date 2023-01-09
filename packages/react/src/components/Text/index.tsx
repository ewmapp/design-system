import { CSS } from '@stitches/react'
import React, { ElementType, forwardRef } from 'react'
import { styled } from '../../styles'
import { Text as TextCSS } from './style'

const StyleText = styled('span', TextCSS)

export type TextProps = React.ComponentProps<typeof StyleText> &
  React.HTMLAttributes<typeof StyleText> & { css?: CSS; as?: ElementType }

export const Text = forwardRef<React.ElementRef<typeof StyleText>, TextProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleText ref={forwardRef} {...props}>
        {children}
      </StyleText>
    )
  }
)

Text.displayName = 'Text'
