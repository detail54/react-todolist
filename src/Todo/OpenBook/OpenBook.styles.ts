import Styled from 'styled-components';

const OpenBook = Styled.div`
  width: 500px;
  height: 700px;
  max-height: 700px;
  border-left: 3px dashed gray;
  border-right: 3px dashed gray;

  .open-book-header {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: block;
      border-radius: 10px;
      background: #d1cece;
      color: white;
      padding: 30px;
      font-size: 30px;
    }
  }

  .open-book {

  }
  
`;

export const OpenBookStyles = {
  OpenBook,
}