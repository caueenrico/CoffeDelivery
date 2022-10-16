import styled from "styled-components";

export const PaymentMethodos = styled.button`
  width: 11.18rem;
  height: 3.18rem;
  border: 2px solid ${props => props.theme.button};
  border-radius: 6px;
  background: ${props => props.theme.button};
  transition: 0.4s;
  color: ;

  &:focus{
    border-color: ${props => props.theme["purple-dark"]};
  }
  
`