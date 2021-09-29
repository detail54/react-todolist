import React from 'react'
import TodoInsert from '../TodoInsert/TodoInsert';
import { TodoDetailStyles as Styled } from './TodoDetail.styles';
import { FiXCircle } from "react-icons/fi";


interface IProps {
  onTodoCreate: (todo:any) => void;
  lastItemId: number;
  onCloseOpenBook: () => void;
}

const TodoDetailView: React.FC<IProps> = (props) => {

  const { onTodoCreate, lastItemId, onCloseOpenBook } = props;

  return (
    <Styled.TodoDetail>
      <div className='todo-detail-close-button-div'>
        <button onClick={onCloseOpenBook}><FiXCircle /></button>
      </div>
      <h1 className='todo-detail-header'>
        <span>일정 추가</span>
      </h1>
      <div className='todo-detail-body'>
        <TodoInsert onTodoCreate={onTodoCreate} lastItemId={lastItemId} />
      </div>
    </Styled.TodoDetail>
  )
}

export default TodoDetailView
