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
      icon={<MapPinLine size={22} color={${}}/>} 
      title='Endereço de Entrega' 
      subtitle="Informe o endereço onde deseja receber seu pedido"
      />

    <form action=""></form>
    </ContainerCheckOut>
    </>
  )
}