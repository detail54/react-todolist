import React, { useState } from 'react'
import OpenSection from './OpenSection/OpenSection';
import TodoList from './TodoList/TodoList';
import TodoListData from './TodoListData';
import { TodoIndexStyles as Styled } from './TodoIndex.styles';
import TodoInsert from './TodoInsert/TodoInsert';
import TodoDetail from './TodeDetail/TodoDetail';
import TodoRewrite from './TodoRewrite/TodoRewrite';

const TodoListIndex: React.FC = () => {

  const [ open, setOpen ] = useState(false);
  const [ list, setList ] = useState(TodoListData);
  const [ osTitle, setOsTilte ] = useState('');
  const [ osBody, setOsBody ] = useState(<></>);

  const lastItemId = list.length < 1 ? 0 : list[list.length - 1].id;

  const onTodoCreate = (todo: any) => {
    setList(list.concat(todo));
  }

  const onOpenInsertSection = () => {
    setOsTilte('Todo Add');
    setOsBody(<TodoInsert onTodoCreate={onTodoCreate} lastItemId={lastItemId} />);
    setOpen(true);
  }

  const onOpenDetailSection = (todo: any) => {
    setOsTilte('Todo Detail');
    setOsBody(<TodoDetail todo={todo} onOpenRewriteSection={onOpenRewriteSection} />);
    setOpen(true);
  }

  const onTodoRewrite = (todo: any) => {
    const listCopy = [...list];
    const index = listCopy.find(listCopy => listCopy.id === todo.id);
    listCopy.splice(index ? index.id - 1 : 0, 1, todo);

    setList([...listCopy]);
    onOpenDetailSection(todo);
  }

  const onOpenRewriteSection = (todo: any) => {
    setOsTilte('Todo Rewrite');
    setOsBody(<TodoRewrite todo={todo} onTodoRewrite={onTodoRewrite}/>);
    setOpen(true);
  }

  const onTodoDelete = (todo: any) => {
    setList(list.filter(list => list.id !== todo.id))
  }

  const onCloseSection = () => {
    setOpen(false);
  }

  const openSectionViewProps = {
    osTitle,
    osBody,
    onCloseSection,
  }

  const openSection = open 
  ? <OpenSection {...openSectionViewProps} />
  : '';


  const todoListViewProps = {
    list,
    onOpenRewriteSection,
    onTodoDelete,
    lastItemId,
    onOpenInsertSection,
    onOpenDetailSection,
  }

  return (
    <Styled.TodoIndex>
      <h1 className='header'>TodoList</h1>
      <div className='body'>
        <TodoList {...todoListViewProps}/> 
        {openSection}
      </div>
      <div className='footer'>
      </div>
    </Styled.TodoIndex>
  )
}

export default TodoListIndex
