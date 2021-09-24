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
}

const TodoListItemView: React.FC<IProps> = (props) => {

  const { todo, listId, buttonGroup } = props;

  return (
    <Styled.TodoListItem>
      <div>
        {listId}
        <span className='todo'>
          <span>{todo.title}</span>  {/*onClick 일정 상세보기*/}
        </span>
        {buttonGroup}
      </div>
    </Styled.TodoListItem>
  )
}

export default TodoListItemView
