import styled from "styled-components";

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-around;
  
  background-color: ${props => props.theme['button']};
  width: 72px;
  height: 38px;

  border-radius: 6px;

  input{
    border: none;
    width: 100%;
    text-align: center;
  
    border-radius: 6px;
    color: ${props => props.theme['title']};
    background: none;
    margin-top: -2px;
  }

  button{
    background: none;
    border: none;
    color: ${props => props.theme['purple']};
    cursor: pointer;
    transition: 0.4s;

    &:disabled{
      opacity: 0.4;
    }

    &:not(:disabled):hover {
      color: ${props => props.theme['purple-dark']};
    }
  }

`

export const PlusB = styled.button`
 margin-right: 8px;
 margin-left: 0;
`

export const MinimusB = styled.button`
  margin-left: 8px;

`