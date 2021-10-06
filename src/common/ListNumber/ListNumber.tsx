import React from 'react'
import ListNumberView from './ListNumberView'

interface IProps {
  number: number
}

const ListNumber: React.FC<IProps> = (props) => {
  const { number } = props

  return <ListNumberView number={number} />
}

export default ListNumber
