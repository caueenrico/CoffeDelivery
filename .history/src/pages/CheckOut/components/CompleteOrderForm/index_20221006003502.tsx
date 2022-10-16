import { TilteText } from "../../../Home/styles";
import { ContainerCheckOut, ContainerColunm, ContainerFlex } from "./styles";

export function CheckOut() {
  return (
    <ContainerFlex>
      <ContainerColunm>
        <TilteText>Complete seu pedido</TilteText>

        
          <ContainerCheckOut onSubmit={handleSubmit(handleConfirmOrder)}>
           
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