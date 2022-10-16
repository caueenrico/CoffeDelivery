import styled, { css } from "styled-components";

export const PaymentMethodos = styled.div`
  input{
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div{
    ${({ theme }) => css`
    background: ${props.theme.color.};
  `};
  }
  
`
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 11.18rem;
  height: 3.18rem;
  border: 2px solid ${props => props.theme.button};
  border-radius: 6px;
  background: ${props => props.theme.button};
  transition: 0.4s;
  color: ${props => props.theme.text};
  font-size: 12px;
  text-transform: uppercase;
  gap: 12px;

`