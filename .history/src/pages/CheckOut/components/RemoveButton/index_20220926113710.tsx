import { Trash } from "phosphor-react";
import { Container } from "./styles";

export function RemoveButton(){
  return(
    <Container>
      <Trash size={16} color='#8047F8'/> <p> remover</p>
    </Container>
  )
}