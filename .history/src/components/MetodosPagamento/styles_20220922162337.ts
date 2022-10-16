import styled from "styled-components";

export const PaymentMethodos = styled.button`
  width: 11.18rem;
  height: 3.18rem;
  border: 1px solid ${props => props.theme.button};
  border-radius: 6px;
  background: ${props => props.theme.button};

  &:focus{
    border: ${props => props.theme["purple-dark"]};
  }
  
`