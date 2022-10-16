import { ShoppingCart } from "phosphor-react";
import { createContext, useContext, useState } from "react";
import { coffees } from "../../data/CoffesOK";
import { Coffee } from "../CoffeCards";
import { CartOfCardContainer } from "./styles";

export const ItensInCartContext = createContext({} as any)

function handleAddToCart() {
  const [itensInCart, setItensInCart] = useContext(ItensInCartContext)

  setItensInCart([...itensInCart, coffees])
 
  console.log(itensInCart);
}

export function CartOfCard (){

  const [itensInCart, setItensInCart] = useState<Coffee[]>([])

  return(
    <ItensInCartContext.Provider value={{itensInCart, setItensInCart}}>
      <CartOfCardContainer onClick={handleAddToCart}>
        <ShoppingCart size={22} weight='fill'/>
      </CartOfCardContainer>
    </ItensInCartContext.Provider>
  )
}