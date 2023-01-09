import { css } from '../../styles'

export const ContainerCSS = css({
  overflowX: 'auto'
})
export const TableCSS = css({
  borderCollapse: 'collapse',
  width: '100%',

  '& th': {
    padding: '12px 0px 12px 8px',
    fontWeights: 'bold',
    textAlign: 'left',
    backgroundColor: '$greenEwm500',
    color: '$gray200'
  },
  '& td': { border: '1px solid rgba(255,255,255, 0.05)', padding: '8px' },
  '& tr': {},
  '& tr:nth-child(even)': { backgroundColor: 'rgba(255,255,255, 0.02)' },
  '& tr:hover': { backgroundColor: 'rgba(0,0,255, 0.02)' }
})
