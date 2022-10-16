import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartOfCardContainer } from "./styles";


export function CartOfCard (){
  const { addCoffeeToCart } = useContext(CartContext)

  function handleAddCoffeeToCart(...coffe: any){
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