import Styled from 'styled-components';

const TodoListItem = Styled.div`
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding: 10px;

  div {
    display: flex;
  }

  span {
    display: flex;
    align-items: center;
  }

  span:nth-child(1) {
    flex-grow: 0;
  }
  span:nth-child(2) {
    flex-grow: 2;
  }
  span:nth-child(3) {
    flex-grow: 0;
  }

  .number {
    color: white;
    background-color: #d1cece;
    width: 30px;
    height: 30px;
    margin: 0px;
    border-radius: 100px;
    justify-content: center;
    cursor: pointer;
  }

  .todo {
    margin-left: 5px;
  }

  .buttons button{
    margin-left: 5px;
  }
`;

export const TodoListItemStyles = {
  TodoListItem,
  
}