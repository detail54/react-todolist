import React from 'react'
import TodoDetailView from './TodoDetailView';

interface IProps {
  todo: {
    id: number;
    title: string;
    content: string;
  }
}

const TodoDetail: React.FC<IProps> = (props) => {

  const { todo } = props;

  return <TodoDetailView todo={todo}/>
}

export default TodoDetail
