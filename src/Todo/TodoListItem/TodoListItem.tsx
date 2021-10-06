import React from 'react'
import TodoListItemView from './TodoListItemView';
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TodoListItemStyles } from './TodoListItem.styles';
import { IListItem } from '../interface';
import ListNumber from '../../common/ListNumber/ListNumber';
import AddButton from '../../common/AddButton/AddButton';
import Button from '../../common/Button/Button';
import ButtonGroup from '../../common/ButtonGroup/ButtonGroup';

interface IProps {
  todo?: IListItem;
  number?: number;
  onOpenDetailSection?: (todo: IListItem) => void;
  onTodoDelete: (todo: IListItem) => void;
  onOpenRewriteSection: (todo: IListItem) => void;
  onOpenInsertSection?: () => void;
}

const TodoListItem: React.FC<IProps> = (props) => {

  const { 
    todo = {
      id: 0, 
      title: '', 
      content: '',
    }, 
    number = 0,
    onOpenDetailSection,
    onTodoDelete,
    onOpenRewriteSection,
    onOpenInsertSection = () => {},
  } = props;

  const idCheck = number 
    ? <ListNumber number={number} />
    : <AddButton onClick={onOpenInsertSection} />

  const buttons = (
    <>
      <Button onClick={() => onOpenRewriteSection(todo)}><FiEdit2 /></Button>
      <Button onClick={() => onTodoDelete(todo)}><FiTrash2 /></Button>
    </>
  )

  const buttonGroup = number
    ? <ButtonGroup buttons={buttons} />
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
