import { Current, FooterCard, InputAndCart, NameCoffe, Price, Tag, TypesCoffe } from "./styles";
import Coffe from '../assets/Coffe.png'
import { InputNumber } from "../IpuntNumber";
import { CartOfCard } from "../CartOfCard";

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

export interface CoffeeProps{
  coffee: Coffee;
}

export function CoffeCards({coffee}: CoffeeProps){
  return(
    <TypesCoffe>
        <img src={Coffe} alt="" />
        <Tag>
          {coffee.tags.map((tag) =>(        
            <span key={`${coffee.id} ${tag}`}>{tag}</span>         
          ))}
        </Tag>
        <NameCoffe>
          <h2>{coffee.name}</h2>
          <span>{coffe}</span>
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