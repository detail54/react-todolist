import React from 'react'
import TodoListItemView from './TodoListItemView';

interface IProps {
  todo?: {
    id: number;
    title: string;
    content: string;
  }
  number?: number;
  onTodoDelete: (todo:any) => void;
  onTodoRewrite: (todo:any) => void;
}

const TodoListItem: React.FC<IProps> = (props) => {

  const { 
    todo = {
      id: 0, 
      title: '', 
      content: ''
    }, 
    number = 0, 
    onTodoDelete,
    onTodoRewrite
  } = props;

  return <TodoListItemView todo={todo} number={number} onTodoDelete={onTodoDelete} onTodoRewrite={onTodoRewrite} />
}

export default TodoListItem
