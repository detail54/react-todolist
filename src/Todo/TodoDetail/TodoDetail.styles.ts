import Styled from 'styled-components';

const TodoDetail = Styled.div`
  width: 500px;
  height: 700px;
  max-height: 700px;
  border-left: 3px dashed gray;
  border-right: 3px dashed gray;

  .todo-detail-close-button-div {
    margin-top: 5px;
    display: flex;
    justify-content: right;
    align-items: center;

    button {
      font-size: 25px;
      background: none;
      border: none;
      color: #85999e;
      cursor: pointer;
    }

    button:hover {
      font-size: 28px;
    }
  }

  .todo-detail-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;

    span {
      display: block;
      border-radius: 10px;
      background: #d1cece;
      color: white;
      padding: 30px;
      font-size: 30px;
    }
  }

  .todo-detail-body {

  }
  
`;

export const TodoDetailStyles = {
  TodoDetail,
}