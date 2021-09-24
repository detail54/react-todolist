import React, { useState } from 'react'
import TodoListItem from './TodoListItem/TodoListItem';
import TodoListView from './TodoListView';

interface IProps {
  
}

const TodoList: React.FC<IProps> = (props) => {

  const {  } = props; 

  const [ list , setList ] = useState([
    {
      id: 1,
      title: 'work1',
      content: 'work1 content'
    },
    {
      id: 2,
      title: 'work2',
      content: 'work2 content'
    },
    {
      id: 3,
      title: 'work3',
      content: 'work3 content'
    },
    {
      id: 4,
      title: 'work4',
      content: 'work4 content'
    },
  ]);

  const lastItemId = list[list.length - 1].id;

  const onTodoCreate = (todo: any) => {
    setList([...list, {...todo}]);
  }

  const onTodoDelete = (todo: any) => {
    setList(list.filter(title => title.id !== todo.id))
  }

  const data = list.map((item, index) => (
    <TodoListItem key={index} todo={item.title} number={index + 1} />
  ));

  const viewProps = {
    data,
    lastItemId,
    onTodoCreate,
    onTodoDelete,

  }

  return <TodoListView {...viewProps} />
}

export default TodoList
