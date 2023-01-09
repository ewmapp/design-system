import { css } from '../../styles'

export const Box = css({
  padding: '$4',
  borderRadius: '$md',
  /* backgroundColor: '#333333', */
  border: '1px solid rgba(255,255,255,0.1)',

  variants: {
    variant: {
      default: {
        background: 'transparent'
      },
      dark: {
        color: '$white',
        background: '$gray900'
      }
    }
  },

  defaultVariants: {
    variant: 'default'
  }
})
