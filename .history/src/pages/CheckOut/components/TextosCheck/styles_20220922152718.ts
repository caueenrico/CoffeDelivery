import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 40px 40px;
  

  div{
    h1{
      font-size: 0.875rem;
      font-weight: 400;
      color: ${props => props.theme.title};
    }
    span{
      font-size: 0.875rem;
      font-weight: 400;
      color: ${props => props.theme.text};
    }
  }

`

