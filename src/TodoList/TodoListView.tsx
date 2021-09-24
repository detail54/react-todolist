import React from 'react'
import TodoInsert from './TodoInsert/TodoInsert';
import { TodoListStyles as Styled} from './TodoList.styles';

interface IProps {
  data: any;
  lastItemId: number;
  onTodoCreate: (todo:any) => void;
  onTodoDelete: (todo:any) => void;
}

const TodoListView: React.FC<IProps> = (props) => {

  const { data, lastItemId, onTodoCreate, onTodoDelete } = props;

  return (
    <Styled.TodoList>
      <div className='header'>
        <h2>TodoList</h2>
        <TodoInsert onTodoCreate={onTodoCreate} lastItemId={lastItemId} />
      </div>
      <div className='todo-list'>
        {data}
      </div>
      <div className='footer'>

      </div>
    </Styled.TodoList>
  )
}

export default TodoListView

