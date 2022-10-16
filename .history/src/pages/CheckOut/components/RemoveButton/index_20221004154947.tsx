import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CoffeeProps } from "../../../../components/CoffeCards";
import { CartContext, CartItens } from "../../../../context/CartContext";
import { Container } from "./styles";


export function RemoveButton() {

  return(
    <Container>
      <Trash size={16} color='#8047F8'/> remover
    </Container>
  )
}