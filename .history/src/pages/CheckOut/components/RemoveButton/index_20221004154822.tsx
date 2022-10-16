import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CoffeeProps } from "../../../../components/CoffeCards";
import { CartContext, CartItens } from "../../../../context/CartContext";
import { Container } from "./styles";

interface RemoveButtonProps {
  coffee: CoffeeProps;
}

export function RemoveButton({ coffe  }: CartItens){

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