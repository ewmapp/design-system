import React, { forwardRef } from 'react'
import { CSS, styled } from '../../styles'
import { Code as CodeCSS } from './style'

const StyleCode = styled('pre', CodeCSS)

export type CodeProps = React.ComponentProps<typeof StyleCode> &
  React.HTMLAttributes<typeof StyleCode> & { css?: CSS }

export const Code = forwardRef<React.ElementRef<typeof StyleCode>, CodeProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleCode ref={forwardRef} {...props}>
        {children}
      </StyleCode>
    )
  }
)

Code.displayName = 'Code'
