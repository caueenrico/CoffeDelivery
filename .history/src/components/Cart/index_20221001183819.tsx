import { ShoppingCart } from "phosphor-react";
import React from "react";
import { CartContainer } from "./styles";

export function Cart (){
  
  return(
    <CartContainer>
      <ShoppingCart size={22} weight='fill'/>
    </CartContainer>
  )
}