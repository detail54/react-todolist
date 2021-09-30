import React from 'react'
import { TodoListStyles } from './TodoList.styles';

interface IProps {
  data: any;
}

const TodoListView: React.FC<IProps> = (props) => {

  const { data } = props;

  return (
    <>
      <TodoListStyles.Root>
        <TodoListStyles.List>
          {data}
        </TodoListStyles.List>
      </TodoListStyles.Root>
    </>
  )
}

export default TodoListView

