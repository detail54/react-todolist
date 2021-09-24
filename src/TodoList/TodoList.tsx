import React, { useState } from 'react'
import TodoListItem from './TodoListItem/TodoListItem';
import TodoListView from './TodoListView';

interface IProps {
  
}

const TodoList: React.FC<IProps> = (props) => {

  const {  } = props; 

  const [ list , setList ] = useState([
    {
      title: 'work1',
      content: 'work1 content'
    },
    {
      title: 'work2',
      content: 'work2 content'
    },
    {
      title: 'work3',
      content: 'work3 content'
    },
    {
      title: 'work4',
      content: 'work4 content'
    },
  ]);

  const data = list.map((item, index) => (
    <TodoListItem key={index} todo={item.title} number={index + 1} />
  ));

  return <TodoListView data={data} />
}

export default TodoList
