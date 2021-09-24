import Styled from 'styled-components'

const TodoList = Styled.div`
  width: 500px;
  height: 700px;
  max-height: 700px;

  .header, .footer {
    background: #cee6eb;
  }

  .header {
    text-align: center;
    border: 1px solid black;
    border-radius: 8px 8px 0px 0px;
    font-size: 30px;
  }

  .header h2 {
    margin: 0px;
    padding: 20px 0px 20px 0px;
  }

  .todo-list {
    
  }

  .footer {
    height: 50px;
    border-radius: 0px 0px 8px 8px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;

  }
  
`;

export const TodoListStyles = {
  TodoList,

}