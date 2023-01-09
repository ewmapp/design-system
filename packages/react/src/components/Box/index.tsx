import { CSS } from '@stitches/react'
import React, { ElementType, forwardRef } from 'react'
import { styled } from '../../styles'
import { Box as BoxCSS } from './style'

const StyleBox = styled('div', BoxCSS)

export type BoxProps = React.ComponentProps<typeof StyleBox> &
  React.HTMLAttributes<typeof StyleBox> & { css?: CSS; as?: ElementType }

export const Box = forwardRef<React.ElementRef<typeof StyleBox>, BoxProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleBox ref={forwardRef} {...props}>
        {children}
      </StyleBox>
    )
  }
)

Box.displayName = 'Box'
