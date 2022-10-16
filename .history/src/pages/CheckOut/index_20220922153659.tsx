import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TilteText } from "../Home/styles";
import { AddressForm } from "./AddresForm";
import { TextCheck } from "./components/TextosCheck";
import { AddressFormContainer, ContainerCheckOut } from "./styles";

export function CheckOut() {
  return (
    <>
      <TilteText>Complete seu pedido</TilteText>

      <ContainerCheckOut>
        <TextCheck
          icon={<MapPinLine size={22} color="#C47F17" />}
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
        
        <AddressForm />
        <TextCheck
          icon={<MapPinLine size={22} color="#C47F17" />}
          title="Pagamento"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
        
      </ContainerCheckOut>

      
    </>
  );
}
