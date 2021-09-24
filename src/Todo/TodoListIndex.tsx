import React, { useState } from 'react'
import OpenBook from './OpenBook/OpenBook';
import TodoList from './TodoList/TodoList';
import { TodoIndexStyles as Styled } from './TodoListIndex.styles';

const TodoListIndex: React.FC = () => {

  const [ open, setOpen ] = useState(true);

  const onOpenBook = () => {
    setOpen(true);
  }

  const onCloseOpenBook = () => {
    setOpen(false);
  }

  const openBook = open 
  ? <OpenBook />
  : '';

  return (
    <Styled.TodoIndex>
      <h1 className='header'>TodoList</h1>
      <div className='body'>
        <TodoList /> 
        {openBook}
      </div>
      <div className='footer'>
      </div>
    </Styled.TodoIndex>
  )
}

export default TodoListIndex
