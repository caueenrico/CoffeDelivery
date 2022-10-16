import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartOfCardContainer } from "./styles";


export function CartOfCard (){
  const { addCoffeeToCart } = useContext(CartContext)

  return(
    
      <CartOfCardContainer >
        <ShoppingCart size={22} weight='fill'/>
      </CartOfCardContainer>
    
  )
}