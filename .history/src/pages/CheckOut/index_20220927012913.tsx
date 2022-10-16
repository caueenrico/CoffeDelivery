import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { MetodosdePagamentos } from "../../components/MetodosPagamento";
import { TilteText } from "../Home/styles";
import { AddressForm } from "./AddresForm";
import { SelectCoffes } from "./components/SelectCoffes";
import { TextCheck } from "./components/TextosCheck";
import {
  ContainerCheckOut,
  ContainerColunm,
  ContainerFlex,
  MetodosDePagamentoContainer,
  PaymentContainer,
  SelectCoffesContainer,
} from "./styles";

export function CheckOut() {
  return (
    <ContainerFlex>
      <ContainerColunm>
        <TilteText>Complete seu pedido</TilteText>

        <ContainerCheckOut>
          <TextCheck
            icon={<MapPinLine size={22} color="#C47F17" />}
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
          />

          <AddressForm />
        </ContainerCheckOut>

        <PaymentContainer>
          <ContainerCheckOut>
            <TextCheck
              icon={<CurrencyDollar size={22} color="#8047F8" />}
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <MetodosDePagamentoContainer>
              <MetodosdePagamentos
                icon={<CreditCard size={16} color="#8047F8" />}
                title="Cartão de Crédito"
              />
              <MetodosdePagamentos
                icon={<Bank size={16} color="#8047F8" />}
                title="Cartão de Débito"
              />
              <MetodosdePagamentos
                icon={<Money size={16} color="#8047F8" />}
                title="Dinheiro"
              />
            </MetodosDePagamentoContainer>
          </ContainerCheckOut>
        </PaymentContainer>
      </ContainerColunm>

      <ContainerColunm>
        <TilteText>Cafés selecionados</TilteText>

        <SelectCoffesContainer>
          <SelectCoffes/>
        </SelectCoffesContainer>

        <ValueContainer>
          
        </ValueContainer>
      </ContainerColunm>
    </ContainerFlex>
  );
}
