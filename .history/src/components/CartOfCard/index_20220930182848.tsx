import { ShoppingCart } from "phosphor-react";
import { CartOfCardContainer } from "./styles";

export const ItensInCartContext = create


export function CartOfCard (){
  return(
    <CartOfCardContainer >
      <ShoppingCart size={22} weight='fill'/>
    </CartOfCardContainer>
  )
}