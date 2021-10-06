import React from 'react'
import { ButtonGroupStyles } from './ButtonGroup.styles'

interface IProps {
  buttons: JSX.Element
}

const ButtonGroupView: React.FC<IProps> = (props) => {
  const { buttons } = props

  return <ButtonGroupStyles.Span>{buttons}</ButtonGroupStyles.Span>
}

export default ButtonGroupView
