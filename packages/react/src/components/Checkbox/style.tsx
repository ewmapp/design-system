import { css, keyframes } from '@stitches/react'

export const CheckboxContainer = css({
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $gray800',

  '&[data-state="checked"]': {
    backgroundColor: '$green300'
  },

  '&:focus': {
    border: '2px solid $green500'
  }
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)'
  },
  to: {
    transform: 'translateY(-100%)'
  }
})

export const CheckboxIndicator = css({
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 0.2s ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 0.2s ease-out`
  }
})
