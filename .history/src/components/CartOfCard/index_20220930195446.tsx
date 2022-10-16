import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartOfCardContainer } from "./styles";


export function CartOfCard (){
  const { addCoffeeToCart } = useContext

  return(
    
      <CartOfCardContainer >
        <ShoppingCart size={22} weight='fill'/>
      </CartOfCardContainer>
    
  )
}