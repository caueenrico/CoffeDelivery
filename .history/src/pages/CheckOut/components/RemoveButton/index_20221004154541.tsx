import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CoffeeProps } from "../../../../components/CoffeCards";
import { CartContext } from "../../../../context/CartContext";
import { Container } from "./styles";

export function RemoveButton({ coffee }: CoffeeProps){

  const {removeCartItem} = useContext(CartContext);

  function handleRemoveCoffee(){
    removeCartItem(coffee.id)
  }

  return(
    <Container
    onClick={handleRemoveCoffee}
    >
      <Trash size={16} color='#8047F8'/> remover
    </Container>
  )
}