import React from 'react'
import TodoInsert from '../TodoInsert/TodoInsert';
import { OpenSectionStyles as Styled } from './OpenSection.styles';
import { FiXCircle } from "react-icons/fi";


interface IProps {
  osTitle: string;
  osBody: any;
  onCloseSection: () => void;
}

const OpenSectionView: React.FC<IProps> = (props) => {

  const { osTitle, osBody, onCloseSection } = props;

  return (
    <Styled.OpenSection>
      <div className='open-section-close-button-div'>
        <button onClick={onCloseSection}><FiXCircle /></button>
      </div>
      <h1 className='open-section-header'>
        <span>{osTitle}</span>
      </h1>
      <div className='open-section-body'>
        {osBody}
      </div>
    </Styled.OpenSection>
  )
}

export default OpenSectionView
