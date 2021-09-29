import React from 'react'
import { TodoListItemStyles as Styled } from './TodoListItem.styles';

interface IProps {
  todo: {
    id: number;
    title: string;
    content: string;
  }
  listId: any;
  buttonGroup: any;
  onOpenDetailSection?: (todo: any) => void;
}

const TodoListItemView: React.FC<IProps> = (props) => {

  const { todo, listId, buttonGroup, onOpenDetailSection = () => {} } = props;

  return (
    <Styled.TodoListItem>
      <div>
        {listId}
        <span className='todo'>
          <span onClick={() => onOpenDetailSection(todo)}>{todo.title}</span>
        </span>
        {buttonGroup}
      </div>
    </Styled.TodoListItem>
  )
}

export default TodoListItemView
