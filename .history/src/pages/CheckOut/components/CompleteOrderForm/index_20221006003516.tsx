import { TilteText } from "../../../Home/styles";
import { AddressForm } from "./AddresForm";
import { PaymenteMethodo } from "./PaymenteMethodo";
import { ContainerCheckOut, ContainerColunm, ContainerFlex } from "./styles";

export function CheckOut() {
  return (
    <ContainerFlex>
      <ContainerColunm>
        <TilteText>Complete seu pedido</TilteText>

        
          <ContainerCheckOut >
           
            <AddressForm />

          </ContainerCheckOut>
      

        <PaymenteMethodo/>

      </ContainerColunm>

      <ContainerColunm>
        <TilteaText>Cafés selecionados</TilteaText>

        <SelectCoffesContainer>
          <RenderSelectCoffes />
        </SelectCoffesContainer>

      </ContainerColunm>

    </ContainerFlex>
  );
}   