import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartOfCardContainer } from "./styles";


export function CartOfCard (){
  const { addCoffeeToCart } = useContext(CartContext)

  function handleAddCoffeeToCart(){
    addCoffeeToCart({
      id: 1,
      tags: ["tag1", "tag2"],
      name: "Café",
      description: "Café de qualidade",
      photo: "cafe.jpg",
      price: 10,
      quantity: 1
    })
  }

  return(
    
      <CartOfCardContainer onClick={han}>
        <ShoppingCart size={22} weight='fill'/>
      </CartOfCardContainer>
    
  )
}