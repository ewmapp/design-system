import { css } from '../../styles'

export const ButtonCSS = css({
  all: 'unset',
  borderRadius: '$sm',
  textAlign: 'center',

  boxSizing: 'border-box',
  border: '1px solid',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$3'
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$purple400',
        borderColor: '$purple400',
        '&:not(:disabled):hover': {
          color: '$white',
          background: '$purple500',
          borderColor: '$purple500'
        }
      },
      secondary: {
        color: '$white',
        background: '$blue500',
        borderColor: '$blue500',
        '&:not(:disabled):hover': {
          color: '$white',
          background: '$blue600',
          borderColor: '$blue600'
        }
      },
      success: {
        color: '$white',
        background: '$green400',
        borderColor: '$green400',
        '&:not(:disabled):hover': {
          color: '$white',
          background: '$green500',
          borderColor: '$green500'
        }
      },
      danger: {
        color: '$white',
        background: '$red400',
        borderColor: '$red400',
        '&:not(:disabled):hover': {
          color: '$white',
          background: '$red500',
          borderColor: '$red500'
        }
      },
      warning: {
        color: '$gray800',
        background: '$yellow400',
        borderColor: '$yellow400',
        '&:not(:disabled):hover': {
          color: '$gray800',
          background: '$yellow500',
          borderColor: '$yellow500'
        }
      },
      info: {
        color: '$gray800',
        background: '$blue200',
        borderColor: '$blue200',
        '&:not(:disabled):hover': {
          color: '$gray800',
          background: '$blue300',
          borderColor: '$blue300'
        }
      },
      light: {
        color: '$gray800',
        background: '$gray300',
        borderColor: '$gray300',
        '&:not(:disabled):hover': {
          color: '$gray800',
          background: '$gray400',
          borderColor: '$gray400'
        }
      },
      dark: {
        color: '$gray200',
        background: '$gray900',
        borderColor: '$gray900',
        '&:not(:disabled):hover': {
          color: '$gray200',
          background: '$gray800',
          borderColor: '$gray800'
        }
      },
      link: {
        color: '$blue400',
        background: 'transparent',
        borderColor: 'transparent',
        textDecoration: 'underline'
      }
    },

    outlined: {
      true: {
        background: 'transparent'
      }
    },
    disable: {
      true: {
        color: '$gray600',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderColor: 'rgba(255,255,255,0.1)',
        cursor: 'not-allowed'
      }
    },

    size: {
      sm: {
        fontSize: '$xs',
        padding: '0 $2',
        height: 26,
        minWidth: 54
      },
      md: {
        padding: '0 $4',
        height: 36,
        minWidth: 84
      },
      lg: {
        padding: '0 $4',
        height: 46,
        minWidth: 128
      }
    }
  },
  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        color: '$purple300',
        borderColor: '$purple300'
      }
    },
    {
      variant: 'secondary',
      outlined: true,
      css: {
        color: '$blue300',
        borderColor: '$blue300'
      }
    },
    {
      variant: 'success',
      outlined: true,
      css: {
        color: '$green300',
        borderColor: '$green300'
      }
    },
    {
      variant: 'danger',
      outlined: true,
      css: {
        color: '$red300',
        borderColor: '$red300'
      }
    },
    {
      variant: 'warning',
      outlined: true,
      css: {
        color: '$yellow300',
        borderColor: '$yellow300'
      }
    },
    {
      variant: 'info',
      outlined: true,
      css: {
        color: '$blue200',
        borderColor: '$blue200'
      }
    },
    {
      variant: 'light',
      outlined: true,
      css: {
        color: '$gray300',
        borderColor: '$gray300'
      }
    },
    {
      disable: true,
      outlined: true,
      css: {
        color: '$gray600',
        borderColor: 'rgba(255,255,255,0.1)'
      }
    }
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})
