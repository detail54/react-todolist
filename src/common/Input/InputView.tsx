import React from 'react'
import { InputStyles } from './Input.styles'

interface IProps {
  name?: string
  value?: string
  onChange?: (event: any) => any
  placeholder?: string
}

const InputView: React.FC<IProps> = (props) => {
  const { name = '', value = '', onChange = () => {}, placeholder = '' } = props

  return (
    <InputStyles.Input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default InputView
