import React, { useState } from 'react'
import TodoInsertView from './TodoInsertView';

interface IProps {
  lastItemId: number;
  onTodoCreate: (todo: any) => void;
}

interface ITodo {
  id: number;
  title: string;
  content: string;
}

const TodoInsert: React.FC<IProps> = (props) => {

  const { lastItemId, onTodoCreate } = props;

  const [ todo, setTodo ] = useState<ITodo>({id: 0, title: '', content: ''});

  const onSetTodo = () => {
    onTodoCreate({...todo, id: lastItemId + 1});
    setTodo({id:0, title: '', content: ''})
  }

  const onChangeTitle = (text: string) => {
    setTodo({...todo, title: text});
  }
  const onChangeContent = (text: string) => {
    setTodo({...todo, content: text});
  }

  const viewProps = {
    title: todo.title,
    content: todo.content,
    onSetTodo,
    onChangeTitle,
    onChangeContent,
  }

  return <TodoInsertView {...viewProps} />
}

export default TodoInsert
