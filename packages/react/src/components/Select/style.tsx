import { css } from '../../styles'

export const ContainerCSS = css({})
export const SelectCSS = css({})

export const SelectTriggerCSS = css({
  /* all: 'unset', */
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '0 15px',
  fontSize: '13px',
  lineHeight: 1,
  height: '35px',
  gap: '5px',
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  color: '$gray200',
  boxShadow: '0 2px 10px $black',

  /* minWidth: '150px', */

  '&:focus': {
    borderColor: '$green500'
  }
  /* '&:hover': {
    backgroundColor: '$purple900'
  } */
})

export const SelectPortalCSS = css({
  /* position: 'relative',
  top: '-10px',
  right: '-20px',
  margin: 0 */
})

export const SelectContentCSS = css({
  /*  overflow: 'hidden', */
  backgroundColor: '$gray900',
  borderRadius: '6px',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
})

export const SelectViewportCSS = css({
  padding: '$1'
})

export const SelectItemCSS = css({
  fontSize: '13px',
  lineHeight: 1,
  color: '$gray200',
  borderRadius: '$1',
  display: 'flex',
  alignItems: 'center',
  height: '25px',
  padding: '0 35px 0 25px',
  position: 'relative',
  userSselect: 'none',

  '&:hover': {
    cursor: 'pointer',
    outline: 'none'
  }
})
