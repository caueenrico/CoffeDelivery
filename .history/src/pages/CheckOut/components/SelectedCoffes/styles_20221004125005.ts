import styled from "styled-components";

export const SelectedStyles = styled.div`
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

`
