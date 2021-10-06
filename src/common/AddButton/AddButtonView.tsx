import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { AddButtonStyles } from './AddButton.styles'

interface IProps {
  onClick: () => void
}

const AddButtonView: React.FC<IProps> = (props) => {
  const { onClick } = props

  return (
    <AddButtonStyles.Div>
      <FiPlusCircle onClick={onClick} />
    </AddButtonStyles.Div>
  )
}

export default AddButtonView
