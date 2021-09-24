import Styled from 'styled-components';

const OpenBook = Styled.div`
  width: 500px;
  height: 700px;
  max-height: 700px;
  border-left: 3px dashed gray;
  border-right: 3px dashed gray;

  .openbook-close-button-div {
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

  .openbook-header {
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

  .openbook-body {

  }
  
`;

export const OpenBookStyles = {
  OpenBook,
}