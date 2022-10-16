import styled from "styled-components";

export const ContainerCheckOut = styled.div `

  margin-left: 160px;
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  background: ${props => props.theme.card};
`

export const AddressFormContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep{
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street{
    grid-column: span 3;
  }

  .complemento {
    grid-column: span 2;
  }

`