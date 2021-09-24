import React from 'react'
import TodoInsert from '../TodoInsert/TodoInsert';
import { OpenBookStyles as Styled } from './OpenBook.styles';

interface IProps {
  onTodoCreate: (todo:any) => void;
  lastItemId: number;
}

const OpenBookView: React.FC<IProps> = (props) => {

  const { onTodoCreate, lastItemId } = props;

  return (
    <Styled.OpenBook>
      <h1 className='open-book-header'>
        <span>일정 추가</span>
      </h1>
      <div className='open-book'>
        <TodoInsert onTodoCreate={onTodoCreate} lastItemId={lastItemId} />
      </div>
    </Styled.OpenBook>
  )
}

export default OpenBookView
