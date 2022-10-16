import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CoffeeProps } from "../../../../components/CoffeCards";
import { CartContext, CartItens } from "../../../../context/CartContext";
import { Container } from "./styles";

interface RemoveButtonProps {
  coffee: CoffeeProps;
}

export function RemoveButton({ coffee  }: RemoveButtonProps) {

  const {removeCartItem} = useContext(CartContext);

  function handleRemoveCoffee(){
    removeCartItem(coffee)
  }

  return(
    <Container
    onClick={handleRemoveCoffee}
    >
      <Trash size={16} color='#8047F8'/> remover
    </Container>
  )
}