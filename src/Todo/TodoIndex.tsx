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
    setOpen(true);
    setOsTilte('일정 추가');
    setOsBody(<TodoInsert onTodoCreate={onTodoCreate} lastItemId={lastItemId} />);
  }

  const onOpenDetailSection = (todo: any) => {
    setOpen(true);
    setOsTilte('일정 상세');
    setOsBody(<TodoDetail todo={todo} onOpenRewriteSection={onOpenRewriteSection} />);
  }

  const onTodoRewrite = (todo: any) => {
    const data = list.find(list => list.id === todo.id);
    setList([...list, list[data? data.id - 1 : 0] = {...todo}]);
    onOpenDetailSection(todo);
  }

  const onOpenRewriteSection = (todo: any) => {
    setOpen(true);
    setOsTilte('일정 수정');
    setOsBody(<TodoRewrite todo={todo} onTodoRewrite={onTodoRewrite}/>);
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
