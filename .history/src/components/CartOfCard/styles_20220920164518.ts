import styled from "styled-components";

export const CartOfCardContainer = styled.button`
  max-width: 38px;
  max-height: 38px;
  border-radius: 5px;
  border: none;

  background-color: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['card']};

  display: flex;
  align-content: center;
  align-items: center;

  padding: 8px;

`