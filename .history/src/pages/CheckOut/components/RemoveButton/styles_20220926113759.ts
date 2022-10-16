import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 5rem;
  min-height: 2rem;
  border: 2px solid ${props => props.theme.button};
  border-radius: 6px;
  background: ${props => props.theme.button};
  transition: 0.4s;
  color: ${props => props.theme.text};
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  gap: 4px;
  padding: ;

`