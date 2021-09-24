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

  const { title, content, onSetTodo, onChangeTitle, onChangeContent } = props;

  return (
    <Styled.TodoInsert>
      <div className='insert-title-div'>
        <input 
          name='title' 
          onChange={(event) => onChangeTitle(event.currentTarget.value)} 
          value={title} 
          placeholder='Todo Title'
        />
      </div>
      <div className='insert-content-div'>
        <textarea 
          name='content' 
          onChange={(event) => onChangeContent(event.currentTarget.value)} 
          value={content} 
          placeholder='Todo Content'
          />
      </div>
      <div className='insert-button-div'>
        <button onClick={() => onSetTodo()}>Add</button>
      </div>
    </Styled.TodoInsert>
  )
}

export default TodoInsertView
