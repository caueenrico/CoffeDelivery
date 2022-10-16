import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { coffees } from "../../data/CoffesOK";
import { CoffeeProps } from "../CoffeCards";
import { CartOfCardContainer } from "./styles";



export function CartOfCard (){
  const { addCoffeeToCart } = useContext(CartContext)

  function handleAddCoffeeToCart(){
    const coffeeToAdd = {
      ...coffee,
      quantity: 1
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return(
    
      <CartOfCardContainer onClick={handleAddCoffeeToCart}>
        <ShoppingCart size={22} weight='fill'/>
      </CartOfCardContainer>
    
  )
}