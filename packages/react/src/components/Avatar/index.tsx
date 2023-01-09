import { ComponentProps, ElementRef, forwardRef, HTMLAttributes } from 'react'
import { CSS, styled } from '../../styles'
import { AvatarContainerCSS, AvatarFallbackCSS, AvatarImageCSS } from './style'

/* Versão Produção */
import * as AvatarX from '@radix-ui/react-avatar'
const AvatarXRoot = styled(AvatarX.Root, AvatarContainerCSS)
const AvatarXImage = styled(AvatarX.Image, AvatarImageCSS)
const AvatarXFallback = styled(AvatarX.Fallback, AvatarFallbackCSS)

export type AvatarProps = ComponentProps<typeof AvatarXImage> &
  HTMLAttributes<typeof AvatarXImage> & { css?: CSS; as?: any }

export const Avatar = forwardRef<ElementRef<typeof AvatarXImage>, AvatarProps>(
  ({ ...props }, forwardRef) => {
    return (
      <AvatarXRoot ref={forwardRef}>
        <AvatarXImage {...props} />
        <AvatarXFallback></AvatarXFallback>
      </AvatarXRoot>
    )
  }
)

Avatar.displayName = 'Avatar'
