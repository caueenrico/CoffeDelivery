import { ShoppingCart } from "phosphor-react";
import { createContext } from "react";
import { Coffee } from "../CoffeCards";
import { CartOfCardContainer } from "./styles";

export const ItensInCartContext = createContext({} as Coffee)

function handleAddToCart(coffee: Coffee) {
  console.log(coffee)
}

export function CartOfCard (){
  return(
    <CartOfCardContainer onClick={}>
      <ShoppingCart size={22} weight='fill'/>
    </CartOfCardContainer>
  )
}