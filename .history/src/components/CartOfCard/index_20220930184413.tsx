import { ShoppingCart } from "phosphor-react";
import { createContext, useContext, useState } from "react";
import { Coffee } from "../CoffeCards";
import { CartOfCardContainer } from "./styles";

export const ItensInCartContext = createContext({  } as Coffee)

function handleAddToCart() {
  const [itensInCart, setItensInCart] = useContext(ItensInCartContext)
  setItensInCart([...itensInCart, coffee])
  console.log("add to cart");
}

export function CartOfCard (){

  const [itensInCart, setItensInCart] = useState({} as Coffee)

  return(
    <ItensInCartContext.Provider value={{itensInCart, setItensInCart}}>
      <CartOfCardContainer onClick={handleAddToCart}>
        <ShoppingCart size={22} weight='fill'/>
      </CartOfCardContainer>
    </ItensInCartContext.Provider>
  )
}