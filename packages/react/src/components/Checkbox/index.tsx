import * as CheckboxComp from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import {
  ComponentProps,
  ElementRef,
  ElementType,
  forwardRef,
  HTMLAttributes
} from 'react'
import { CSS, styled } from '../../styles'
import {
  CheckboxContainer as ContainerCSS,
  CheckboxIndicator as IndicatorCSS
} from './style'

const StyleContainer = styled(CheckboxComp.Root, ContainerCSS)
const StyleIndicator = styled(CheckboxComp.Indicator, IndicatorCSS)

/* export interface CheckboxProps extends ComponentProps<typeof StyleContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <StyleContainer {...props}>
      <StyleIndicator asChild>
        <Check weight="bold" />
      </StyleIndicator>
    </StyleContainer>
  )
} */

export type CheckboxProps = ComponentProps<typeof StyleContainer> &
  HTMLAttributes<typeof StyleContainer> & { css?: CSS; as?: ElementType }

export const Checkbox = forwardRef<
  ElementRef<typeof StyleContainer>,
  CheckboxProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyleContainer ref={forwardRef} {...props}>
      <StyleIndicator asChild>
        <Check weight="bold" />
      </StyleIndicator>
    </StyleContainer>
  )
})

Checkbox.displayName = 'Checkbox'
