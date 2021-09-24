import React from 'react'
import { TodoListStyles as Styled} from './TodoList.styles';

interface IProps {
  data: any;
  
}

const TodoListView: React.FC<IProps> = (props) => {

  const { data } = props;

  return (
    <Styled.TodoList>
      <div className='header'>
        <h2>TodoList</h2>
        <div className='input-box'>
          <input />
          <button>Add</button>
        </div>
      </div>
      <div className='todo-list'>
        {data}
      </div>
    </Styled.TodoList>
  )
}

export default TodoListView

