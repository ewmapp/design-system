import {
  ComponentProps,
  ElementRef,
  ElementType,
  forwardRef,
  HTMLAttributes
} from 'react'
import { CSS, styled } from '../../styles'
import { Text } from '../Text'
import { ButtonCSS } from './style'

const StyleButton = styled('button', ButtonCSS)

export type ButtonTextProps = ComponentProps<typeof StyleButton> &
  HTMLAttributes<typeof StyleButton> & { css?: CSS; as?: ElementType }

export const Button = forwardRef<
  ElementRef<typeof StyleButton>,
  ButtonTextProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyleButton ref={forwardRef} {...props}>
      <Text css={{ fontSize: 'unset', color: 'unset' }}>{children}</Text>
    </StyleButton>
  )
})

Button.displayName = 'Button'
