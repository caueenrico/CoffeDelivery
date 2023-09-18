import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  >p{
    color: ${props => props.theme["purple-dark"]};
  }
  `


export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.button};
  background: ${props => props.theme.input};
  transition: 0.4s;

  &:focus{
    border-color: ${props => props.theme["yellow-dark"]};
  }

  color: ${props => props.theme["text"]};
  font-size: 00.75rem;
  padding: 0 0.75rem;

  &::placeholder{
    color: ${props => props.theme["label"]};
  }

  //responsive

  @media (min-width: 768px){
    height: 3.125rem;
  }
`