import Styled from 'styled-components';

const TodoIndex = Styled.section`
  border: 3px solid black;
  border-radius: 10px;

  .header, .footer {
    background: #cee6eb;
  }

  .header {
    border-radius: 10px 10px 0px 0px;
    margin: 0px;
    padding: 20px;
    text-align: center;
    font-size: 50px;
    border-bottom: 3px solid black;
    color: #767676;
  }

  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0px 30px 0px 30px;
  }

  .footer {
    height: 50px;
    border-radius: 0px 0px 10px 10px;
    border-top: 3px solid black;
  }
`;

export const TodoIndexStyles = {
  TodoIndex,

}