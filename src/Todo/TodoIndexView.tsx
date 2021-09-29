import React from 'react'
import { TodoIndexStyles as Styled } from './TodoIndex.styles';
import TodoList from './TodoList/TodoList';

interface IProps {
  todoListViewProps: any;
  openSection: any;
}

const TodoIndexView: React.FC<IProps> = (props) => {

  const { todoListViewProps, openSection } = props;

  return (
    <Styled.TodoIndex>
    <h1 className='header'>TodoList</h1>
    <div className='body'>
      <TodoList {...todoListViewProps}/> 
      {openSection}
    </div>
    <div className='footer'>
    </div>
  </Styled.TodoIndex>
  )
}

export default TodoIndexView
