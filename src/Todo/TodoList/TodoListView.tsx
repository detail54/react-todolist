import React from 'react'
import TodoInsert from '../TodoInsert/TodoInsert';
import { TodoListStyles as Styled} from './TodoList.styles';

interface IProps {
  data: any;
  lastItemId: number;
  onTodoCreate: (todo:any) => void;
}

const TodoListView: React.FC<IProps> = (props) => {

  const { data, lastItemId, onTodoCreate } = props;

  return (
    <>
      <Styled.TodoList>
          {/* <TodoInsert onTodoCreate={onTodoCreate} lastItemId={lastItemId} /> */}
        <div className='todo-list'>
          {data}
        </div>
      </Styled.TodoList>
    </>
  )
}

export default TodoListView

