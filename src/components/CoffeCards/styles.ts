import styled from "styled-components"

export const TypesCoffe = styled.div `
width: 256px;
height: 310px;
left: 0px;
top: 0px;

display: flex;
flex-direction: column;
align-items: center;

text-align: center;

background: ${props => props.theme['card']};
border-radius: 6px 36px;

img{
  margin: 10px;
  margin-top: -15px;
}

`
export const Tag = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 4px;

span {
  background-color: ${props => props.theme['yellow-light']};
  padding: 4px 8px;
  text-transform: uppercase;
  border-radius: 10px;

  font-size: 10px;
  font-weight: 700;
  color: ${props => props.theme['yellow-dark']};
}

`
export const NameCoffe = styled.div`
display: flex;
flex-direction: column;
margin-top: 16px;
margin-left: 20px;
margin-right: 20px;
gap: 8px;


h2 {
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: ${props => props.theme['subtitle']};
}

span {
  font-weight: 400;
 font-size: 14px;
 line-height: 130%;
 color: ${props => props.theme['label']};
}

`
export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 208px;
  margin-top: 33px;
  margin-left: 24px;
  margin-right: 24px;
`

export const InputAndCart = styled.div`
  display: flex;
  gap: 8px;
`
export const Current = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme['text']};
  margin-right: 2px;
`
export const Price = styled.span`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 24px;
  color: ${props => props.theme['text']};
`

