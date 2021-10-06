import React from 'react'
import { ListNumberStyles } from './ListNumber.styles'

interface IProps {
  number: number
}

const ListNumberView: React.FC<IProps> = (props) => {

  const { number } = props

  return (
    <ListNumberStyles.Number>
      {number}
    </ListNumberStyles.Number>
  )
}

export default ListNumberView
