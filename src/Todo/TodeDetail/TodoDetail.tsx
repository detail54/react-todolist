import React from 'react'
import TodoDetailView from './TodoDetailView';

interface IProps {
  todo: {
    id: number;
    title: string;
    content: string;
  };
  onOpenRewriteSection: (todo: any) => void;
}

const TodoDetail: React.FC<IProps> = (props) => {

  const { todo, onOpenRewriteSection } = props;

  return <TodoDetailView todo={todo} onOpenRewriteSection={onOpenRewriteSection}/>
}

export default TodoDetail
