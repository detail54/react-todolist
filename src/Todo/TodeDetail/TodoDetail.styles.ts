import Styled from 'styled-components';

const Root = Styled.div`
  padding: 10px;

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

const Header = Styled.h2`
  margin-bottom: 10px;
  color: #8e8e8e;
`;

const Title = Styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px;
  font-size: 20px
`;

const Content = Styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px;
  height: 315px;
  font-size: 20px
`;

const Footer = Styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const Button = Styled.button`
  border: none;
  background: #d1cece;
  color: white;
  font-size: 25px;
  padding: 2px 10px 2px 10px;
  cursor: pointer;

  &:focus {
    border: none;
  }

  &:hover {
    border: 2px solid white;
  }
`;

export const TodoDetailStyles = {
  Root,
  Header,
  Title,
  Content,
  Footer,
  Button
}