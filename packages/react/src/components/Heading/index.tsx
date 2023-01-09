import { CSS } from '@stitches/react'
import React, { ElementType, forwardRef } from 'react'
import { styled } from '../../styles'
import { Heading as HeadingCSS } from './style'

const StyleHeading = styled('h2', HeadingCSS)

export type HeadingProps = React.ComponentProps<typeof StyleHeading> &
  React.HTMLAttributes<typeof StyleHeading> & { css?: CSS; as?: ElementType }

export const Heading = forwardRef<
  React.ElementRef<typeof StyleHeading>,
  HeadingProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyleHeading ref={forwardRef} {...props}>
      {children}
    </StyleHeading>
  )
})

Heading.displayName = 'Heading'
