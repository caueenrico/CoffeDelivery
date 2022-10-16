import { ShoppingCart } from "phosphor-react";
import { createContext } from "react";
import { CartOfCardContainer } from "./styles";

export const ItensInCartContext = createContext([{}] as )


export function CartOfCard (){
  return(
    <CartOfCardContainer >
      <ShoppingCart size={22} weight='fill'/>
    </CartOfCardContainer>
  )
}