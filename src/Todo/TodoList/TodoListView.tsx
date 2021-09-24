import React from 'react'
import TodoInsert from '../TodoInsert/TodoInsert';
import { TodoListStyles as Styled} from './TodoList.styles';

interface IProps {
  data: any;
}

const TodoListView: React.FC<IProps> = (props) => {

  const { data } = props;

  return (
    <>
      <Styled.TodoList>
        <div className='todo-list'>
          {data}
        </div>
      </Styled.TodoList>
    </>
  )
}

export default TodoListView

