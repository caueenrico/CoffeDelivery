import { Current, FooterCard, InputAndCart, NameCoffe, Price, Tag, TypesCoffe } from "./styles";
import Coffe from '../assets/Coffe.png'
import { InputNumber } from "../IpuntNumber";
import { CartOfCard } from "../CartOfCard";

export interface Coffee {
  id: string
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps{
  coffee: Coffee;
}

export function CoffeCards({coffee }: CoffeeProps){
  return(
    <TypesCoffe>
        <img src={Coffe} alt="" />
        <Tag>
          {coffee.tags.map(tag=>(
            <span key={`${coffe.id}`}></span>
            
          ))}
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