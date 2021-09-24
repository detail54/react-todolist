import React from 'react'
import TodoListItemView from './TodoListItemView';
import { FiPlusCircle } from "react-icons/fi";
import { FiEdit2, FiTrash2 } from "react-icons/fi";


interface IProps {
  todo?: {
    id: number;
    title: string;
    content: string;
  }
  number?: number;
  onTodoDelete: (todo:any) => void;
  onTodoRewrite: (todo:any) => void;
  onOpenBook?: () => void;
}

const TodoListItem: React.FC<IProps> = (props) => {

  const { 
    todo = {
      id: 0, 
      title: '', 
      content: ''
    }, 
    number,
    onTodoDelete,
    onTodoRewrite,
    onOpenBook,
  } = props;

  const idCheck = number 
    ? <span className='number'>{number}</span>
    : (<div className='openbook-button'><FiPlusCircle onClick={onOpenBook} /></div>)

  const buttonGroup = number
    ? (<span className='buttons'>
        <button onClick={() => onTodoRewrite(todo)}><FiEdit2 /></button>
        <button onClick={() => onTodoDelete(todo)}><FiTrash2 /></button>
      </span>)
    : '';

  return (
    <TodoListItemView 
      todo={todo} 
      listId={idCheck} 
      buttonGroup={buttonGroup}
    />
  )
}

export default TodoListItem
