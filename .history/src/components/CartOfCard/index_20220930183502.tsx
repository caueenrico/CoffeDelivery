import { ShoppingCart } from "phosphor-react";
import { createContext } from "react";
import { Coffee } from "../CoffeCards";
import { CartOfCardContainer } from "./styles";

export const ItensInCartContext = createContext({} as Coffee)

function handleAddToCart() {
  
  console.log("add to cart");
}

export function CartOfCard (){
  return(
    <CartOfCardContainer onClick={handleAddToCart}>
      <ShoppingCart size={22} weight='fill'/>
    </CartOfCardContainer>
  )
}