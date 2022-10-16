import styled from "styled-components";

export const ContainerCheckOut = styled.div `

  display: flex;
  flex-direction: column;
  width: 40rem;
  background: ${props => props.theme.card};
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep{
    grid-column: spam 3;
    max-width: 12.5rem;
  }

  .street{
    grid-column: span 3;
  }

  .complement {
    gr
  }

`