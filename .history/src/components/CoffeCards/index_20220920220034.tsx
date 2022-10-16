import { Current, FooterCard, InputAndCart, NameCoffe, Price, Tag, TypesCoffe } from "./styles";
import Coffe from '../assets/Coffe.png'
import { InputNumber } from "../IpuntNumber";
import { CartOfCard } from "../CartOfCard";
import { formatMoney } from "../../utils/formatMoney";

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps{
  coffee: Coffee;
}

export function CoffeCards({coffee}: CoffeeProps){
  const formatedPrice = formatMoney(coffee.price)

  return(
    <TypesCoffe>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <Tag>
          {coffee.tags.map((tag) =>(        
            <span key={`${coffee.id} ${tag}`}>{tag}</span>         
          ))}
        </Tag>
        <NameCoffe>
          <h2>{coffee.name}</h2>
          <span>{coffee.description}</span>
        </NameCoffe>
      
      <FooterCard>
        <div>
          <Current>R$</Current>
          <Price>{formatedPrice}</Price>
        </div>

        <InputAndCart>
          <InputNumber/>
          <CartOfCard />
        </InputAndCart>

      </FooterCard>
         
    </TypesCoffe>
  )
}