import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  
  border-bottom: 1px solid #E6E5E5;

  img{
    height: 4rem;
    margin-right: 20px;
  }
  .dataContent{
    border: 1px solid black;
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
    font-size: 16px;
    color: ${props => props.theme.text};
  }

`