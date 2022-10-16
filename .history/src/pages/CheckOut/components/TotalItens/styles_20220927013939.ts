import styled from "styled-components";

export const Container = styled.div`
  display: flex;

`

export const Text = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.text};
`
export const Valor = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.text};
`
export const TotalBold = styled.span`
  font-size: 1.25rem;
  color: ${props => props.theme.subtitle};

`