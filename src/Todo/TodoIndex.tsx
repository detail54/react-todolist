import React, { useEffect, useState } from 'react'
import OpenSection from './OpenSection/OpenSection';
import TodoListData from './TodoListData';
import TodoInsert from './TodoInsert/TodoInsert';
import TodoDetail from './TodeDetail/TodoDetail';
import TodoRewrite from './TodoRewrite/TodoRewrite';
import TodoIndexView from './TodoIndexView';

const TodoListIndex: React.FC = () => {

  const [ open, setOpen ] = useState(false);
  const [ list, setList ] = useState(() => JSON.parse(localStorage.getItem('list') || '') || TodoListData);
  const [ osTitle, setOsTilte ] = useState('');
  const [ osBody, setOsBody ] = useState(<></>);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const lastItemId = list.length < 1 ? 0 : list[list.length - 1].id;

  const onTodoInsert = (todo: any) => {
    setList(list.concat(todo));
  }

  const onOpenInsertSection = () => {
    setOsTilte('Todo Add');
    setOsBody(<TodoInsert onTodoInsert={onTodoInsert} lastItemId={lastItemId} />);
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
    setList(list.filter((list: { id: any; }) => list.id !== todo.id))
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

  const viewProps = {
    todoListViewProps,
    openSection
  }

  return <TodoIndexView {...viewProps} />
}

export default TodoListIndex
function key(key: any): string {
  throw new Error('Function not implemented.');
}

