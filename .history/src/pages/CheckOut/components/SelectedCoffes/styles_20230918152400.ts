import styled from "styled-components";

export const SelectedStyles = styled.div`

  display: flex;
  padding-bottom: 24px;
  min-width: 23rem;
  padding-top: 24px;
  border-bottom: 1px solid #E6E5E5;

:nth-child(1){
  padding-top: 0px;
  
}

  :nth-child(1){
    padding-top: 0px;
    border-bottom: 1px solid #E6E5E5;
  }
  img{
    height: 4rem;
    margin-right: 20px;
  }
  .dataContent{
    
    display: flex;
    flex-direction: column;
  }
  .text{
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.subtitle};
  }

  .buttons{
    display: flex;
    gap: 4px;
    margin-top: 8px;
  }

  .price{
    font-weight: 700;
    margin-left: 50px;
    font-size: 16px;
    color: ${props => props.theme.text};
  }

  //responsive

  @media (max-width: 768px) {
    flex-direction: column;
    width: 20px;

  }

`
export const RemoveButton = styled.button`
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
padding: 8px;

`