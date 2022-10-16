import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TilteText } from "../Home/styles";
import { TextCheck } from "./components/TextosCheck";
import { AddressFormContainer, ContainerCheckOut } from "./styles";


export function CheckOut (){
  
  return(
    <>
    <TilteText>
      check out
    </TilteText>

    <ContainerCheckOut>
      <TextCheck 
      icon={<MapPinLine size={22} color="#C47F17"/>} 
      title='Endereço de Entrega' 
      subtitle="Informe o endereço onde deseja receber seu pedido"
      />

      <AddressFormContainer>
        <Addr
      </AddressFormContainer>

    </ContainerCheckOut>
    </>
  )
}