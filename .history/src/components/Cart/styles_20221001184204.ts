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
    top: -8px;
    right: -8px;
    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['yellow-light']};
    border-radius: 50%;
    padding: 2px 5px;
    font-size: 12px;

    display: flex;
    align-items: center;
  }

`