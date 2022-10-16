import { Trash } from "phosphor-react";
import { Container } from "./styles";

export function RemoveButton(){

  const {}

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