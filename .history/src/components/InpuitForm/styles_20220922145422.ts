import styled from "styled-components";

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.button};
  background: ${props => props.theme.input};
  transition: 0.4s;

  &:focus{
    
  }

`