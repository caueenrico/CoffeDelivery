import { ShoppingCart } from "phosphor-react";
import React from "react";
import { CartOfCardContainer } from "./styles";

export function CartOfCard (){
  return(
    <CartOfCardContainer >
      <ShoppingCart size={22} weight='fill'/>
    </CartOfCardContainer>
  )
}