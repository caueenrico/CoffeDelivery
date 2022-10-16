import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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