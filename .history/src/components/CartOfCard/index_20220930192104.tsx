import { ShoppingCart } from "phosphor-react";
import { createContext, useContext, useState } from "react";
import { coffees } from "../../data/CoffesOK";
import { Coffee } from "../CoffeCards";
import { CartOfCardContainer } from "./styles";


export function CartOfCard (){

  return(
    
      <CartOfCardContainer onClick={handleAddToCart}>
        <ShoppingCart size={22} weight='fill'/>
      </CartOfCardContainer>
    
  )
}