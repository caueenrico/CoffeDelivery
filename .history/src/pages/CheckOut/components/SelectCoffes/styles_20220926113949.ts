import styled from "styled-components";

export const Container = styled.div`
  display: flex;
 

  img{
    height: 4rem;
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

  .buttons
`