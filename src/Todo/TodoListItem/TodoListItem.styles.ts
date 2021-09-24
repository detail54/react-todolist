import Styled from 'styled-components';

const TodoListItem = Styled.div`
  border-bottom: 1px dotted black;
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
    cursor: auto;
  }

  .todo {
    margin-left: 5px;
  }

  .todo span {
    cursor: pointer;
  }

  .buttons button{
    margin-left: 5px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TodoListItemStyles = {
  TodoListItem,
  
}