import Styled from 'styled-components'

const TodoList = Styled.section`
  width: 500px;
  border: 1px solid black;
  border-radius: 8px;

  .header {
    text-align: center;
    border-bottom: 1px solid black;
    background: #c5e1e7;
  }

  .header h2 {
    margin: 0px;
    padding: 20px 0px 20px 0px;
  }

  .input-box {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  div:nth-last-child(1) {
    border: none;
  }
`;

export const TodoListStyles = {
  TodoList,

}