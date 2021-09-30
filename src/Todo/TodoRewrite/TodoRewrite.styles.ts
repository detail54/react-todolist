import Styled from 'styled-components';

const Root = Styled.div`
  padding: 10px;
`;

const Header = Styled.h2`
  margin-bottom: 10px;
    color: #8e8e8e;
`;

const Title = Styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px;
`;

const Input = Styled.input`
  width: 100%;
  background: white;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d9d9d9;
  }
`;

const Content = Styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px;
  height: 315px;
`;

const TextArea = Styled.textarea`
  width: 99%;
  height: 315px;
  background: white;
  border: none;
  font-size: 20px;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d9d9d9;
  }
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

export const TodoRewriteStyles = {
  Root,
  Header,
  Title,
  Input,
  Content,
  TextArea,
  Footer,
  Button
}