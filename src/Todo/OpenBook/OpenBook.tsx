import React from 'react'
import OpenBookView from './OpenBookView';

interface IProps {
  onTodoCreate: (todo:any) => void;
  lastItemId: number;
}

const OpenBook: React.FC<IProps> = (props) => {

  const { onTodoCreate, lastItemId } = props;

  const viewProps = {
    onTodoCreate,
    lastItemId,
  }

  return <OpenBookView {...viewProps} />
}

export default OpenBook
