import React from 'react'
import AddButtonView from './AddButtonView'

interface IProps {
  onClick: () => void
}

const AddButton: React.FC<IProps> = (props) => {
  const { onClick } = props

  return <AddButtonView onClick={onClick} />
}

export default AddButton
