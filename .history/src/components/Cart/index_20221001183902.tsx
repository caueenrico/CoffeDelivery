import { ShoppingCart } from "phosphor-react";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartContainer } from "./styles";

export function Cart (){
  const {quantityAddItens} = useContext(CartContext)
  return(
    <CartContainer>
      <ShoppingCart size={22} weight='fill'/> {}
    </CartContainer>
  )
}