import React, { useState } from 'react'
import TodoListItem from '../TodoListItem/TodoListItem';
import TodoListView from './TodoListView';
import TodoListData from '../TodoListData';

const TodoList: React.FC = () => {

  const [ list, setList ] = useState(TodoListData);

  const lastItemId = list.length < 1 ? 0 : list[list.length - 1].id;

  const onTodoCreate = (todo: any) => {
    setList(list.concat(todo));
  }

  const onTodoDelete = (todo: any) => {
    setList(list.filter(list => list.id !== todo.id))
  }

  const onTodoRewrite = (todo: any) => {
    const data = list.find(list => list.id === todo.id);
    console.log(data);

    setList([...list, list[data? data.id - 1 : 0] = todo]);
  }


  const data = list.length < 1
    ? <TodoListItem onTodoRewrite={onTodoRewrite} onTodoDelete={onTodoDelete}/>
    : list.map((item, index) => (
    <TodoListItem key={index} todo={item} number={index + 1} onTodoDelete={onTodoDelete} onTodoRewrite={onTodoRewrite} />
  ));

  const viewProps = {
    data,
    lastItemId,
    onTodoCreate,
  }

  return <TodoListView {...viewProps} />
}

export default TodoList
