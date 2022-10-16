import { MapPinLine } from "phosphor-react";
import { TilteText } from "../Home/styles";
import { TextCheck } from "./components/TextosCheck";
import { ContainerCheckOut } from "./styles";


export function CheckOut (){
  return(
    <>
    <TilteText>
      check out
    </TilteText>

    <ContainerCheckOut>
      <TextCheck 
      icon={<MapPinLine/>} 
      title='Endereço de Entrega' 
      subtitle=""
      />

    <form action=""></form>
    </ContainerCheckOut>
    </>
  )
}