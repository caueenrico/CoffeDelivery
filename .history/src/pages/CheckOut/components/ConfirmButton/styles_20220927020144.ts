import styled from "styled-components";

export const ButtonConfirm = styled.button`
  background: ${props => props.theme.yellow};
  color: ${props => props.theme["white"]};
  border-radius: 6px;
  padding: 12px 8px;
  border: none;
  margin: 0px 10px;
  transition: 0.2s;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme["yellow-dark"]};
  }
`