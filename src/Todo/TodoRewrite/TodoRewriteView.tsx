import React from 'react'
import { TodoRewriteStyles as Styled } from './TodoRewrite.styles';

interface IProps {
  rewriteTodo: {
    id: number;
    title: string;
    content: string;
  };
  onChangeTitle: (text: string) => void;
  onChangeContent: (text: string) => void;
  onTodoRewrite: (todo: any) => void;
}

const TodoRewriteView: React.FC<IProps> = (props) => {

  const { rewriteTodo, onChangeTitle, onChangeContent, onTodoRewrite } = props;

  return (
    <Styled.TodoRewrite>
      <h2>할 일</h2>
      <div className='rewrite-title'>
        <input value={rewriteTodo.title} onChange={(event) => onChangeTitle(event.currentTarget.value)} />
      </div>
      <h2>내용</h2>
      <div className='rewrite-content'>
        <textarea value={rewriteTodo.content} onChange={(event) => onChangeContent(event.currentTarget.value)} />
      </div>
      <div className='rewrite-button-div'>
        <button onClick={() => onTodoRewrite(rewriteTodo)}>Submit</button>
      </div>
    </Styled.TodoRewrite>
  )
}

export default TodoRewriteView
