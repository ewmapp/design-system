import { css } from '../../styles'

export const AvatarContainerCSS = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyCcontent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '32px',
  height: '32px',
  borderRadius: '100%',
  backgroundColor: 'black',

  variants: {
    size: {
      sm: {
        width: '32px',
        height: '32px'
      },
      md: {
        width: '45px',
        height: '45px'
      },
      lg: {
        width: '58px',
        height: '58px'
      },
      '3xl': {
        width: '72px',
        height: '72px'
      },
      '4xl': {
        width: '$40',
        height: '$40'
      }
    }
  },

  defaultVariants: {
    size: 'sm'
  }
})

export const AvatarImageCSS = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit'
})

export const AvatarFallbackCSS = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$purple400',
  fontSize: '15px',
  lineHeight: 1,
  fontWeight: 500
})
