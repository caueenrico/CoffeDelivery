import styled from "styled-components";


export const SendRequestCont = styled.div`
display: block;
width: 100%;
`	

export const SuccessMesagage = styled.div`
  h1{  
  font-family: 'Baloo 2';
  font-weight: 800;
  color: ${props => props.theme["yellow-dark"]};
  font-size: 2rem;
  }
  span{
    font-size: 1.25rem;
    color: ${props => props.theme["subtitle"]};
  }
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${props => props.theme["text"]};
  font-size: 1rem;

`
export const ContainerLinear = styled.div`
 
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;

background: 
    linear-gradient(#DBAC2C, #8047F8) padding-box,
    linear-gradient(to right, #DBAC2C, #8047F8) border-box;
  border-radius: 50em;
  border: 4px solid transparent;
  box-shadow: 0 0 0 1px #DBAC2C, 0 0 0 2px #8047F8;

`