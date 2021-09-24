import React from 'react'
import { TodoListItemStyles as Styled } from './TodoListItem.styles';

interface IProps {
  todo: string;
  number: number;
}

const TodoListItemView: React.FC<IProps> = (props) => {

  const { todo, number } = props;

  return (
    <Styled.TodoListItem>
      <div>
        <span className='number'>{number}</span>
        <span className='todo'>{todo}</span>
      </div>
    </Styled.TodoListItem>
  )
}

export default TodoListItemView
