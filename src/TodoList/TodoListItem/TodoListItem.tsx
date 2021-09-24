import React from 'react'
import TodoListItemView from './TodoListItemView';

interface IProps {
  todo: string;
  number: number;
}

const TodoListItem: React.FC<IProps> = (props) => {

  const { todo, number } = props;

  return <TodoListItemView todo={todo} number={number}/>
}

export default TodoListItem
