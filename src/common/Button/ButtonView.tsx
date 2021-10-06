import React from 'react'
import { ButtonStyles } from './Button.styles'

interface IProps {
  onClick: Function
  children: any
}

const ButtonView: React.FC<IProps> = (props) => {
  const { onClick, children } = props

  return (
    <ButtonStyles.Button onClick={() => onClick()}>
      {children}
    </ButtonStyles.Button>
  )
}

export default ButtonView
