import Styled from 'styled-components';

const TodoInsert = Styled.div`
  padding: 10px;

  .insert-title-div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 30px;
    border: 1px solid #d9d9d9;

    input {
      width: 100%;
      background: white;
      border: none;
      font-size: 20px;
    }
    input:focus {
      outline: none;
    }
    input::placeholder {
      color: #d9d9d9;
    }
  }

  .insert-content-div {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 30px;
    border: 1px solid #d9d9d9;

    textarea {
      width: 99%;
      height: 420px;
      background: white;
      border: none;
      font-size: 20px;
      resize: none;
    }
    textarea:focus {
      outline: none;
    }
    textarea::placeholder {
      color: #d9d9d9;
    }
  }

  .insert-button-div {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-top: 10px;

    button {
      border: none;
      background: #d1cece;
      color: white;
      font-size: 25px;
      padding: 2px 10px 2px 10px;
    }

    button:focus {
      border: none;
    }
    
    button:hover {
      border: 2px solid white;
    }
  }
`

export const TodoInsertStyles = {
  TodoInsert,

}