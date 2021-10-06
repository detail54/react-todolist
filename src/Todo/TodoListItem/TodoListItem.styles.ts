import Styled from 'styled-components'

const Root = Styled.div`
  border-bottom: 1px dotted black;
  padding: 10px;

  span {
    display: flex;
    align-items: center;
  }

  span:nth-child(1) {
    flex-grow: 0;
  }
  span:nth-child(2) {
    flex-grow: 2;
  }
  span:nth-child(3) {
    flex-grow: 0;
  }
`

const Todo = Styled.div`
  display: flex;
`

const Title = Styled.span`
  margin-left: 5px;

  span {
    cursor: pointer;
  }
`

export const TodoListItemStyles = {
  Root,
  Todo,
  Title,
}
