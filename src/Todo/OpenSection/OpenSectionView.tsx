import React from 'react'
import TodoInsert from '../TodoInsert/TodoInsert';
import { OpenSectionStyles as Styled } from './OpenSection.styles';
import { FiXCircle } from "react-icons/fi";


interface IProps {
  onTodoCreate: (todo:any) => void;
  lastItemId: number;
  onCloseOpenBook: () => void;
}

const OpenSectionView: React.FC<IProps> = (props) => {

  const { onTodoCreate, lastItemId, onCloseOpenBook } = props;

  return (
    <Styled.OpenSection>
      <div className='open-section-close-button-div'>
        <button onClick={onCloseOpenBook}><FiXCircle /></button>
      </div>
      <h1 className='open-section-header'>
        <span>일정 추가</span>
      </h1>
      <div className='open-section-body'>
        <TodoInsert onTodoCreate={onTodoCreate} lastItemId={lastItemId} />
      </div>
    </Styled.OpenSection>
  )
}

export default OpenSectionView
