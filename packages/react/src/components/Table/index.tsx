import { ComponentProps, ElementRef, forwardRef } from 'react'
import { styled } from '../../styles'
import { ContainerCSS, TableCSS } from './style'

const StyleContainer = styled('div', ContainerCSS)
const StyleTable = styled('table', TableCSS)

export interface TableProps extends ComponentProps<typeof StyleTable> {}

export const Table = forwardRef<ElementRef<typeof StyleTable>, TableProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleContainer>
        <StyleTable {...props} ref={forwardRef}>
          {children}
        </StyleTable>
      </StyleContainer>
    )
  }
)

Table.displayName = 'Table'
