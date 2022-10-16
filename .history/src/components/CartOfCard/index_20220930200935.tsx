import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { CoffeeProps } from "../CoffeCards";
import { CartOfCardContainer } from "./styles";



export function CartOfCard (){

  return(
      <CartOfCardContainer on>
        <ShoppingCart size={22} weight='fill'/>
      </CartOfCardContainer>
    
  )
}