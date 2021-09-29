import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem';
import TodoListView from './TodoListView';

interface IProps {
  list: any[];
  lastItemId: number;
  onOpenInsertSection: () => void;
  onOpenDetailSection: (todo: any) => void;
  onOpenRewriteSection: (todo: any) => void;
  onTodoDelete: (todo: any) => void;
}

const TodoList: React.FC<IProps> = (props) => {

  const { 
    list, 
    lastItemId, 
    onOpenInsertSection, 
    onOpenDetailSection, 
    onOpenRewriteSection, 
    onTodoDelete 
  } = props;

  const todoAdd = (
    <TodoListItem 
      onOpenRewriteSection={onOpenRewriteSection} 
      onTodoDelete={onTodoDelete} 
      onOpenInsertSection={onOpenInsertSection}/>
  );

  const data = list.length < 1
    ? todoAdd
    : list.map((item, index) => (
    <TodoListItem 
      key={index} 
      todo={item} 
      number={index + 1} 
      onOpenDetailSection={onOpenDetailSection}
      onTodoDelete={onTodoDelete} 
      onOpenRewriteSection={onOpenRewriteSection} />
  )).concat(todoAdd);

  const viewProps = {
    data,
    lastItemId,
  }

  return <TodoListView {...viewProps} />
}

export default TodoList
