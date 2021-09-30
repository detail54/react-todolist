import React from 'react'
import { TodoRewriteStyles } from './TodoRewrite.styles';

interface IProps {
  rewriteTodo: {
    id: number;
    title: string;
    content: string;
  };
  onChangeTitle: (text: string) => void;
  onChangeContent: (text: string) => void;
  onTodoRewrite: (todo: any) => void;
}

const TodoRewriteView: React.FC<IProps> = (props) => {

  const { rewriteTodo, onChangeTitle, onChangeContent, onTodoRewrite } = props;

  return (
    <TodoRewriteStyles.Root>
      <TodoRewriteStyles.Header>할 일</TodoRewriteStyles.Header>
      <TodoRewriteStyles.Title>
        <TodoRewriteStyles.Input value={rewriteTodo.title} onChange={(event) => onChangeTitle(event.currentTarget.value)} />
      </TodoRewriteStyles.Title>
      <TodoRewriteStyles.Header>내용</TodoRewriteStyles.Header>
      <TodoRewriteStyles.Content>
        <TodoRewriteStyles.TextArea value={rewriteTodo.content} onChange={(event) => onChangeContent(event.currentTarget.value)} />
      </TodoRewriteStyles.Content>
      <TodoRewriteStyles.Footer>
        <TodoRewriteStyles.Button onClick={() => onTodoRewrite(rewriteTodo)}>Submit</TodoRewriteStyles.Button>
      </TodoRewriteStyles.Footer>
    </TodoRewriteStyles.Root>
  )
}

export default TodoRewriteView
