import Styled from 'styled-components';

const TodoListItem = Styled.div`
  border-bottom: 1px solid black;
  padding: 5px;

  div {
    display: flex;
  }

  span {
    display: block;
  }

  .number {
    display: flex;
    color: white;
    background-color: #d1cece;
    justify-content: center;
    align-items: center;
    width: 30px;
    margin: 0px;
  }

  .todo {
    margin-left: 5px;
  }
`;

export const TodoListItemStyles = {
  TodoListItem,
  
}