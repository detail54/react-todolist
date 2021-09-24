import React from 'react'
import TodoInsert from '../TodoInsert/TodoInsert';
import { OpenBookStyles as Styled } from './OpenBook.styles';
import { FiXCircle } from "react-icons/fi";


interface IProps {
  onTodoCreate: (todo:any) => void;
  lastItemId: number;
  onCloseOpenBook: () => void;
}

const OpenBookView: React.FC<IProps> = (props) => {

  const { onTodoCreate, lastItemId, onCloseOpenBook } = props;

  return (
    <Styled.OpenBook>
      <div className='openbook-close-button-div'>
        <button onClick={onCloseOpenBook}><FiXCircle /></button>
      </div>
      <h1 className='openbook-header'>
        <span>일정 추가</span>
      </h1>
      <div className='openbook-body'>
        <TodoInsert onTodoCreate={onTodoCreate} lastItemId={lastItemId} />
      </div>
    </Styled.OpenBook>
  )
}

export default OpenBookView
