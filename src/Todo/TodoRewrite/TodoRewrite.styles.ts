import Styled from 'styled-components';

const TodoRewrite = Styled.div`
  padding: 10px;
  
  h2 {
    margin-bottom: 10px;
    color: #8e8e8e;
  }

  .rewrite-title {
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    padding: 5px;

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

  .rewrite-content {
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    padding: 5px;
    height: 315px;

    textarea {
      width: 99%;
      height: 315px;
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

  .rewrite-button-div {
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

export const TodoRewriteStyles = {
  TodoRewrite,
}