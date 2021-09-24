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
        <span className='buttons'>
          <button>수정</button>
          <button>삭제</button>
        </span>
      </div>
    </Styled.TodoListItem>
  )
}

export default TodoListItemView
