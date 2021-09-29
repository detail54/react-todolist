import Styled from 'styled-components';

const TodoDetail = Styled.div`
  padding: 10px;

  h2 {
    margin-bottom: 10px;
    color: #8e8e8e;
  }

  .detail-header {
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    padding: 5px;
    font-size: 20px
  }

  .detail-body {
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    padding: 5px;
    height: 315px;
    font-size: 20px
  }

  .detail-button-div {
    margin-top: 10px;
    display: flex;
    justify-content: right;
    align-items: center;

    button {
      border: none;
      background: #d1cece;
      color: white;
      font-size: 25px;
      padding: 2px 10px 2px 10px;
      cursor: pointer;
    }

    button:focus {
      border: none;
    }

    button:hover {
      border: 2px solid white;
    }
  }
`;

export const TodoDetailStyles = {
  TodoDetail,

}