import React from 'react'
import { TodoIndexStyles } from './TodoIndex.styles';
import TodoList from './TodoList/TodoList';

interface IProps {
  todoListViewProps: any;
  openSection: any;
}

const TodoIndexView: React.FC<IProps> = (props) => {

  const { todoListViewProps, openSection } = props;

  return (
    <TodoIndexStyles.Root>
      <TodoIndexStyles.Header>TodoList</TodoIndexStyles.Header>
      <TodoIndexStyles.Body>
        <TodoList {...todoListViewProps}/> 
        {openSection}
      </TodoIndexStyles.Body>
      <TodoIndexStyles.Footer />  
    </TodoIndexStyles.Root>
  )
}

export default TodoIndexView
