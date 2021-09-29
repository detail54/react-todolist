import React from 'react'
import TodoDetailView from './TodoDetailView';

interface IProps {
  onTodoCreate: (todo:any) => void;
  lastItemId: number;
  onCloseOpenBook: () => void;
}

const TodoDetail: React.FC<IProps> = (props) => {

  const { onTodoCreate, lastItemId, onCloseOpenBook } = props;

  const viewProps = {
    onTodoCreate,
    lastItemId,
    onCloseOpenBook,
  }

  return <TodoDetailView {...viewProps} />
}

export default TodoDetail
