import styled from "styled-components";

export const CartContainer = styled.button`
  max-width: 38px;
  max-height: 38px;
  border-radius: 5px;
  border: none;

  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};

  display: flex;
  align-content: center;
  align-items: center;
  position: relative;

  padding: 8px;

  span {
    position: absolute;
    
  }

`