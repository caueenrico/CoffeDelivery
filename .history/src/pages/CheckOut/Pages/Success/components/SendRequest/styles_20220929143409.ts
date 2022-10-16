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
 
 box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;

position: absolute;
width: 526px;
height: 270px;
left: calc(50% - 526px/2 - 297px);
top: 296px;

border-radius: 6px 36px;
 
border: 1px solid;

border-image-source: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);


`