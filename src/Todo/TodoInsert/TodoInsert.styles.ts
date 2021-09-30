import Styled from 'styled-components';

const Root = Styled.div`
  padding: 10px;
`;

const Title = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
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
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
`;

const TextArea = Styled.textarea`
  width: 99%;
  height: 400px;
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
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 10px;
`;

export const TodoInsertStyles = {
  Root,
  Title,
  Input,
  Content,
  TextArea,
  Footer,
}