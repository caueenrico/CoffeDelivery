import Background from '../assets/Background.png'

import styled from "styled-components";

export const BannerContainer = styled.div`

display: flex;
align-items: center;
justify-content: space-between;

padding: 94px 160px;

background-image: url(${Background});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

`

export const TextContainer = styled.div`
 max-width: 588px;
 
 h1{
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  color: ${props => props.theme['title']}
 }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${props => props.theme['subtitle']}
  }




`

export const Benefist = styled.div `

  margin-top: 66px;
  max-width: 567px;
  color: ${props => props.theme['text']};

  ul {
    list-style-type: none;
    display: flex;
    gap: 40px;
    
  }

  ul li{
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 12px;
    
    
  }

  .test{
    width: 231px;
  }
`

export const ProductsContainer = styled.div`

  h1{
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    margin-left: 160px;
    margin-top: 32px;
    margin-bottom: 54px;

    color:${props => props.theme['subtitle']} 
  }

  

`

export const TilteText = styled.h1``

`