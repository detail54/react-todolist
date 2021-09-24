import React from 'react'
import OpenBookView from './OpenBookView';

interface IProps {
  onTodoCreate: (todo:any) => void;
  lastItemId: number;
  onCloseOpenBook: () => void;
}

const OpenBook: React.FC<IProps> = (props) => {

  const { onTodoCreate, lastItemId, onCloseOpenBook } = props;

  const viewProps = {
    onTodoCreate,
    lastItemId,
    onCloseOpenBook,
  }

  return <OpenBookView {...viewProps} />
}

export default OpenBook
