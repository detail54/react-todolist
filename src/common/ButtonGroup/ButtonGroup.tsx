import React from 'react'
import ButtonGroupView from './ButtonGroupView'

interface IProps {
  buttons: JSX.Element
}

const ButtonGroup: React.FC<IProps> = (props) => {

  const { buttons } = props

  return <ButtonGroupView buttons={buttons} />
}

export default ButtonGroup
