import React from 'react'
import { TodoInsertStyles } from './TodoInsert.styles';
import Button from '../../common/Button/Button';

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
    <TodoInsertStyles.Root>
      <TodoInsertStyles.Title>
        <TodoInsertStyles.Input 
          name='title' 
          onChange={(event) => onChangeTitle(event.currentTarget.value)} 
          value={title} 
          placeholder='Todo Title'
        />
      </TodoInsertStyles.Title>
      <TodoInsertStyles.Content>
        <TodoInsertStyles.TextArea 
          name='content' 
          onChange={(event) => onChangeContent(event.currentTarget.value)} 
          value={content} 
          placeholder='Todo Content'
          />
      </TodoInsertStyles.Content>
      <TodoInsertStyles.Footer>
        <Button onClick={() => onSetTodo()}>Add</Button>
      </TodoInsertStyles.Footer>
    </TodoInsertStyles.Root>
  )
}

export default TodoInsertView
