import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
  background: black;

  >p{
    color: ${props => props.theme["purple-dark"]};
  }


  overflow: hidden;

  //responsive
  @media (max-width: 768px) {
    max-width: 280px;
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

 
`