import React from 'react'
import TodoListItemView from './TodoListItemView';
import { FiPlusCircle } from "react-icons/fi";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TodoListItemStyles } from './TodoListItem.styles';

interface IProps {
  todo?: {
    id: number;
    title: string;
    content: string;
  }
  number?: number;
  onOpenDetailSection?: (todo: any) => void;
  onTodoDelete: (todo:any) => void;
  onOpenRewriteSection: (todo:any) => void;
  onOpenInsertSection?: () => void;
}

const TodoListItem: React.FC<IProps> = (props) => {

  const { 
    todo = {
      id: 0, 
      title: '', 
      content: ''
    }, 
    number = 0,
    onOpenDetailSection,
    onTodoDelete,
    onOpenRewriteSection,
    onOpenInsertSection,
  } = props;

  const idCheck = number 
    ? <TodoListItemStyles.Number>{number}</TodoListItemStyles.Number>
    : (<TodoListItemStyles.OpenButton><FiPlusCircle onClick={onOpenInsertSection} /></TodoListItemStyles.OpenButton>)

  const buttonGroup = number
    ? (<TodoListItemStyles.Buttons>
        <button onClick={() => onOpenRewriteSection(todo)}><FiEdit2 /></button>
        <button onClick={() => onTodoDelete(todo)}><FiTrash2 /></button>
      </TodoListItemStyles.Buttons>)
    : '';

  return (
    <TodoListItemView 
      todo={todo} 
      listId={idCheck} 
      buttonGroup={buttonGroup}
      onOpenDetailSection={onOpenDetailSection}
    />
  )
}

export default TodoListItem
