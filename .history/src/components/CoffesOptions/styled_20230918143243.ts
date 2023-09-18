import styled from "styled-components";


export const CoffesContainer = styled.div`
  
  display: grid;
  grid-template-columns: repeat(4,1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin: 54px 160px;
  width: 100;

  //responsive
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    
    
    
  }

`
