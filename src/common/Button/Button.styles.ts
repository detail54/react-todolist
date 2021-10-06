import Styled from 'styled-components'

export const Button = Styled.button`
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
`

export const ButtonStyles = {
  Button,
}
