import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CoffeeProps } from "../CoffeCards";
import { CartOfCardContainer } from "./styles";


export function CartOfCard (){
  const { addCoffeeToCart } = useContext(CartContext)

  function handleAddCoffeeToCartcoffee: CoffeeProps){
    const coffeeToAdd = {
      ...coffee,
      quantity: 1
    }
    addCoffeeToCart()
  }

  return(
    
      <CartOfCardContainer onClick={handleAddCoffeeToCart}>
        <ShoppingCart size={22} weight='fill'/>
      </CartOfCardContainer>
    
  )
}