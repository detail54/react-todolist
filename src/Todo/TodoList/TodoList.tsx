import React, { useState } from 'react'
import TodoListItem from '../TodoListItem/TodoListItem';
import TodoListView from './TodoListView';
import TodoListData from '../TodoListData';

interface IProps {
  list: any[];
  onTodoRewrite: (todo: any) => void;
  onTodoDelete: (todo: any) => void;
  lastItemId: number;
  onOpenBook: () => void;
}

const TodoList: React.FC<IProps> = (props) => {

  const { list, onTodoRewrite, onTodoDelete, lastItemId, onOpenBook } = props;

  const data = list.length < 1
    ? <TodoListItem onTodoRewrite={onTodoRewrite} onTodoDelete={onTodoDelete}/>
    : list.map((item, index) => (
    <TodoListItem key={index} todo={item} number={index + 1} onTodoDelete={onTodoDelete} onTodoRewrite={onTodoRewrite} />
  )).concat(<TodoListItem onTodoRewrite={onTodoRewrite} onTodoDelete={onTodoDelete} onOpenBook={onOpenBook} />);

  const viewProps = {
    data,
    lastItemId,
  }

  return <TodoListView {...viewProps} />
}

export default TodoList
