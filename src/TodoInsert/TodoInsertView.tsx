import React from 'react'
import { TodoInsertStyles as Styled } from './TodoInsert.styles';

interface IProps {
  title: string;
  content: string;
  onSetTodo: () => void;
  onChangeTitle: (text: string) => void;
  onChangeContent: (text: string) => void;
}

const TodoInsertView: React.FC<IProps> = (props) => {

  const { title, content,onSetTodo, onChangeTitle, onChangeContent } = props;

  return (
    <Styled.TodoInsert>
      <input name='title' onChange={(event) => onChangeTitle(event.currentTarget.value)} value={title} />
      <textarea name='content' onChange={(event) => onChangeContent(event.currentTarget.value)} value={content} />
      <button onClick={() => onSetTodo()}>Add</button>
    </Styled.TodoInsert>
  )
}

export default TodoInsertView
