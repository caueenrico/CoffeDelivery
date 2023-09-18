import styled from "styled-components";


export const CoffesContainer = styled.div`
  
  display: grid;
  grid-template-columns: repeat(4,1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin: 54px 160px;

  //responsive
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2,1fr);
    row-gap: 1.5rem;
    margin: 54px 80px;
  }

`
