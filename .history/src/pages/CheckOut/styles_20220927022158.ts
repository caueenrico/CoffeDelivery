import styled from "styled-components";

export const ContainerFlex = styled.div`
  display: flex;
`
export const ContainerColunm = styled.div`
display: flex;
flex-direction: column;
`

export const ContainerCheckOut = styled.div `

  margin-left: 160px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  background: ${props => props.theme.};
  


`

export const TilteaText = styled.h1`
  font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 130%;

    margin-left: 35px;
    margin-top: 32px;
    margin-bottom: 15px;

    color:${props => props.theme['subtitle']} 
`

export const SelectCoffesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  background: ${props => props.theme.card};
  padding-top: 40px;
  margin-left: 32px;
  border-radius: 6px 44px;
`

export const PaymentContainer = styled.div`
  margin-top: 12px;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  
  margin: 40px;
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

export const MetodosDePagamentoContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 12px;

  margin: 40px;

`

export const ValueContainer = styled.div`

`