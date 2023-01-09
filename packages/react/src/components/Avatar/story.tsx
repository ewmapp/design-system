import { ComponentProps, ElementRef, forwardRef, HTMLAttributes } from 'react'
import { CSS, styled } from '../../styles'
import { AvatarContainerCSS, AvatarFallbackCSS, AvatarImageCSS } from './style'

/* Storybook Versão de teste */
const AvatarXRoot = styled('div', AvatarContainerCSS)
const AvatarXImage = styled('img', AvatarImageCSS)
const AvatarXFallback = styled('div', AvatarFallbackCSS)

export type AvatarStoryProps = ComponentProps<typeof AvatarXImage> &
  HTMLAttributes<typeof AvatarXImage> & { css?: CSS; as?: any }

export const AvatarStory = forwardRef<
  ElementRef<typeof AvatarXImage>,
  AvatarStoryProps
>(({ ...props }, forwardRef) => {
  return (
    <AvatarXRoot {...props}>
      <AvatarXImage {...props} />

      <AvatarXFallback></AvatarXFallback>
    </AvatarXRoot>
  )
})

AvatarStory.displayName = 'AvatarStory'
