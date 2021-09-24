import Styled from 'styled-components';

const TodoIndex = Styled.section`
  border: 1px solid black;
  border-radius: 10px;

  .header, .footer {
    background: #cee6eb;
  }

  .header {
    margin: 0px;
    padding: 20px;
    text-align: center;
    font-size: 50px;
  }

  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0px 30px 0px 30px;
  }

  .footer {
    height: 50px;
    border-radius: 0px 0px 8px 8px;
  }
`;

export const TodoIndexStyles = {
  TodoIndex,

}