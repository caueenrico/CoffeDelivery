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
 
  border: 3px solid transparent;
  border-radius: 1rem;
  

  &:before{
    content: ' ';
   
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: ; /* !importanté */
    border-radius: 1rem; /* !importanté */
    background: linear-gradient(to right, red, orange);
  }
  
;

`