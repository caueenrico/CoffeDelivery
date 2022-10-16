import { Current, FooterCard, InputAndCart, NameCoffe, Price, Tag, TypesCoffe } from "./styles";
import { InputNumber } from "../IpuntNumber";
import { CartOfCard } from "../CartOfCard";
import { formatMoney } from "../../utils/formatMoney";
import { CartOfCardContainer } from "../CartOfCard/styles";
import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

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
  const formatedPrice = formatMoney(coffee.price)
  const [quantity, setQuantity] = useState(1)

  function handleIncrement(){
    setQuantity(quantity + 1)
  }

  function handleDecrement(){
    setQuantity(quantity - 1)
  }

  const {addCoffeeToCart} = useContext(CartContext)

  function handleAddCoffeeToCart(){
    const coffeeToAdd = {
      ...coffee,
      quantity: 1
    }
    addCoffeeToCart(coffeeToAdd)
  }

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
          <InputNumber
          
            quantity={quantity}
          />
          
          <CartOfCardContainer onClick={handleAddCoffeeToCart}>
           <ShoppingCart size={22} weight='fill'/>
          </CartOfCardContainer>
          
        </InputAndCart>

      </FooterCard>
         
    </TypesCoffe>
  )
}