import React, { useState } from 'react'
import OpenBook from './OpenBook/OpenBook';
import TodoList from './TodoList/TodoList';
import TodoListData from './TodoListData';
import { TodoIndexStyles as Styled } from './TodoIndex.styles';

const TodoListIndex: React.FC = () => {

  const [ open, setOpen ] = useState(false);
  const [ list, setList ] = useState(TodoListData);

  const lastItemId = list.length < 1 ? 0 : list[list.length - 1].id;

  const onTodoCreate = (todo: any) => {
    setList(list.concat(todo));
  }

  const onTodoDelete = (todo: any) => {
    setList(list.filter(list => list.id !== todo.id))
  }

  const onTodoRewrite = (todo: any) => {
    const data = list.find(list => list.id === todo.id);
    setList([...list, list[data? data.id - 1 : 0] = todo]);
  }

  const onOpenBook = () => {
    setOpen(true);
  }

  const onCloseOpenBook = () => {
    setOpen(false);
  }

  const openBookViewProps = {
    onTodoCreate,
    lastItemId,
  }

  const openBook = open 
  ? <OpenBook {...openBookViewProps} />
  : '';


  const todoListViewProps = {
    list,
    onTodoRewrite,
    onTodoDelete,
    lastItemId,
    onOpenBook,
  }

  return (
    <Styled.TodoIndex>
      <h1 className='header'>TodoList</h1>
      <div className='body'>
        <TodoList {...todoListViewProps}/> 
        {openBook}
      </div>
      <div className='footer'>
      </div>
    </Styled.TodoIndex>
  )
}

export default TodoListIndex
