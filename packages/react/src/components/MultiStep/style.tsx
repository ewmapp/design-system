import { css } from '../../styles'

export const MultiStepCSS = css({})

export const LabelCSS = css({
  color: '$gray200',

  defaultVariants: {
    size: 'xs'
  }
})

export const StepsCSS = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
  marginTop: '$1'
})

export const StepCSS = css({
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray700',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100'
      }
    }
  }
})
