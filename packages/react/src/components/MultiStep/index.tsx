import { styled } from '../../styles'
import { Text } from '../Text/style'
import { LabelCSS, MultiStepCSS, StepCSS, StepsCSS } from './style'

const StyleContainer = styled('div', MultiStepCSS)
const StyleLabel = styled(Text, LabelCSS)
const StyleSteps = styled('div', StepsCSS)
const StyleStep = styled('div', StepCSS)

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <StyleContainer>
      <StyleLabel>
        Passo {currentStep} de {size}
      </StyleLabel>

      <StyleSteps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map(step => {
          return <StyleStep key={step} active={currentStep >= step} />
        })}
      </StyleSteps>
    </StyleContainer>
  )
}

MultiStep.displayName = 'MultiStep'
