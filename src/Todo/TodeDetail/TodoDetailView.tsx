import React from 'react'
import { TodoDetailStyles as Styled } from './TodoDetail.styles';

interface IProps {
  todo: {
    id: number;
    title: string;
    content: string;
  };
  onOpenRewriteSection: (todo: any) => void;
} 

const TodoDetailView: React.FC<IProps> = (props) => {

  const { todo, onOpenRewriteSection } = props;

  return (
    <Styled.TodoDetail>
      <h2>할 일</h2>
      <div className='detail-header'>
        {todo.title}
      </div>
      <h2>내용</h2>
      <div className='detail-body'>
        {todo.content}
      </div>
      <div className='detail-button-div'>
        <button onClick={() => onOpenRewriteSection(todo)}>Rewrite</button>
      </div>
    </Styled.TodoDetail>
  )
}

export default TodoDetailView
