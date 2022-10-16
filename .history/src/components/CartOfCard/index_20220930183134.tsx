import { ShoppingCart } from "phosphor-react";
import { createContext } from "react";
import { Coffee } from "../CoffeCards";
import { CartOfCardContainer } from "./styles";

export const ItensInCartContext = createContext({} as Coffee)

function han

export function CartOfCard (){
  return(
    <CartOfCardContainer >
      <ShoppingCart size={22} weight='fill'/>
    </CartOfCardContainer>
  )
}