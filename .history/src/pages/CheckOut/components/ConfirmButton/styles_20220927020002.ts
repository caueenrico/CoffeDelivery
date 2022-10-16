import styled from "styled-components";

export const ButtonConfirm = styled.button`
  background: ${props => props.theme.yellow};
  color: ${props => props.theme["white"]};
  border-radius: 6px;
  padding: 12px 8px;
  border: none;
  margin: 40px;
  transition: 0.2s;
  font-size: 14px;
  font-weight: 00;

  &:hover {
    background: ${props => props.theme["yellow-dark"]};
  }
`