import { Current, FooterCard, InputAndCart, NameCoffe, Price, Tag, TypesCoffe } from "./styles";
import Coffe from '../assets/Coffe.png'
import { InputNumber } from "../IpuntNumber";
import { CartOfCard } from "../CartOfCard";




export function CoffeCards(props: CoffesProps){
  return(
    <TypesCoffe>
        <img src={Coffe} alt="" />
        <Tag>
          <span>{props.name}</span>
          <span>Com Leite</span>
        </Tag>
        <NameCoffe>
          <h2>Expresso Tradicional</h2>
          <span>O tradicional café feito com água quente e grãos moídos</span>
        </NameCoffe>
      
      <FooterCard>
        <div>
          <Current>R$</Current>
          <Price>9,90</Price>
        </div>

        <InputAndCart>
          <InputNumber/>
          <CartOfCard />
        </InputAndCart>

      </FooterCard>
         
    </TypesCoffe>
  )
}