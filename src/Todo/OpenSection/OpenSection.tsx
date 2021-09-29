import React from 'react'
import OpenSectionView from './OpenSectionView';

interface IProps {
  onTodoCreate: (todo:any) => void;
  lastItemId: number;
  onCloseOpenBook: () => void;
}

const OpenSection: React.FC<IProps> = (props) => {

  const { onTodoCreate, lastItemId, onCloseOpenBook } = props;

  const viewProps = {
    onTodoCreate,
    lastItemId,
    onCloseOpenBook,
  }

  return <OpenSectionView {...viewProps} />
}

export default OpenSection
