import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxsizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'start',

  minHeight: 80,
  resize: 'vertical',

  '&:has(input:focus)': {
    borderColor: '$green500'
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed'
  }
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0
  }
})
