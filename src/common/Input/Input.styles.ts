import Styled from 'styled-components'

export const Input = Styled.input`
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
`

export const InputStyles = {
  Input,
}
