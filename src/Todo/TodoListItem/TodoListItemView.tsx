import React from 'react'
import { TodoListItemStyles } from './TodoListItem.styles';

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
    <TodoListItemStyles.Root>
      <TodoListItemStyles.Todo>
        {listId}
        <TodoListItemStyles.Title>
          <span onClick={() => onOpenDetailSection(todo)}>{todo.title}</span>
        </TodoListItemStyles.Title>
        {buttonGroup}
      </TodoListItemStyles.Todo>
    </TodoListItemStyles.Root>
  )
}

export default TodoListItemView
