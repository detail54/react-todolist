import React from 'react'
import { TodoListItemStyles as Styled } from './TodoListItem.styles';
import { FiEdit2, FiTrash2 } from "react-icons/fi";

interface IProps {
  todo: {
    id: number;
    title: string;
    content: string;
  }
  number: number;
  onTodoDelete: (todo:any) => void;
  onTodoRewrite: (todo:any) => void;
}

const TodoListItemView: React.FC<IProps> = (props) => {

  const { todo, number, onTodoDelete, onTodoRewrite } = props;

  return (
    <Styled.TodoListItem>
      <div>
        <span className='number'>{number}</span>
        <span className='todo'>
          <span>{todo.title}</span>  {/*onClick*/}
        </span>
        <span className='buttons'>
          <button onClick={() => onTodoRewrite(todo)}><FiEdit2 /></button>
          <button onClick={() => onTodoDelete(todo)}><FiTrash2 /></button>
        </span>
      </div>
    </Styled.TodoListItem>
  )
}

export default TodoListItemView
