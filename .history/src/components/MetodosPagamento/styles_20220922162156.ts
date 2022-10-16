import styled from "styled-components";

export const PaymentMethodos = styled.button`
  width: 11.18rem;
  height: 3.18rem;
  border: none;
  border-radius: 6px;
  background: ${props => props.theme.button};

  &:focus{
    border-color: ${props => props.theme.button};
  }
  
`