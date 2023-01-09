import * as SelectComp from '@radix-ui/react-select'
import { ComponentProps, ElementRef, forwardRef, HTMLAttributes } from 'react'
import { CSS, styled } from '../../styles'
import {
  ContainerCSS,
  SelectContentCSS,
  SelectCSS,
  SelectItemCSS,
  SelectPortalCSS,
  SelectTriggerCSS,
  SelectViewportCSS
} from './style'

const StyleContainer = styled('div', ContainerCSS)
const StyleSelect = styled(SelectComp.Root, SelectCSS)

const StyleTrigger = styled(SelectComp.Trigger, SelectTriggerCSS)
const StylePortal = styled(SelectComp.Portal, SelectPortalCSS)
const StyleContent = styled(SelectComp.Content, SelectContentCSS)
const StyleViewport = styled(SelectComp.Viewport, SelectViewportCSS)
const StyleItem = styled(SelectComp.Item, SelectItemCSS)

export type SelectProps = ComponentProps<typeof StyleSelect> &
  HTMLAttributes<typeof StyleSelect> & { css?: CSS }

export type ItemProps = ComponentProps<typeof StyleItem> &
  HTMLAttributes<typeof StyleItem> & { css?: CSS }

export const Select = forwardRef<ElementRef<typeof StyleSelect>, SelectProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleContainer>
        <StyleSelect {...props}>
          <StyleTrigger>
            <SelectComp.Value placeholder="Select an option" />
            <SelectComp.Icon></SelectComp.Icon>
          </StyleTrigger>
          <StylePortal>
            <StyleContent>
              <StyleViewport>
                <StyleItem value="Option A">Option A</StyleItem>
                <StyleItem value="Option B">Option B</StyleItem>
                <StyleItem value="Option C">Option C</StyleItem>
                <StyleItem value="Option D">Option D</StyleItem>
              </StyleViewport>
            </StyleContent>
          </StylePortal>
        </StyleSelect>
      </StyleContainer>
    )
  }
)

Select.displayName = 'Select'
