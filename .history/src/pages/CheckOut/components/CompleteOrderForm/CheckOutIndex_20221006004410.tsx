import { TilteText } from "../../../Home/styles";
import { RenderSelectCoffes } from "../RenderSelectCoffes";
import { AddressForm } from "./AddresForm";
import { PaymenteMethodo } from "./PaymenteMethodo";
import { ContainerCheckOut, ContainerColunm, ContainerFlex, SelectCoffesContainer, TilteaText } from "./styles";

export function CheckOutIndex() {
  return (
    <ContainerFlex>
      <ContainerColunm>
        <TilteText>Complete seu pedido</TilteText>

        
          <ContainerCheckOut>
           
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