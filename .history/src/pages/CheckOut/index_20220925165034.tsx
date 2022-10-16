import { CreditCard, CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { MetodosdePagamentos } from "../../components/MetodosPagamento";
import { TilteText } from "../Home/styles";
import { AddressForm } from "./AddresForm";
import { TextCheck } from "./components/TextosCheck";
import {  ContainerCheckOut, MetodosDePagamentoContainer, PaymentContainer } from "./styles";

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
    </ContainerCheckOut>

    <PaymentContainer>
      <ContainerCheckOut>
        <TextCheck
        icon={<CurrencyDollar
              size={22}
              color="#8047F8"/>}
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        
        <MetodosDePagamentoContainer>
          <MetodosdePagamentos 
          icon={<CreditCard />}
           tilte='Cartão de Crédito'
          />
          <MetodosdePagamentos  />
          <MetodosdePagamentos  />
        </MetodosDePagamentoContainer>
      </ContainerCheckOut>
    </PaymentContainer>
    </>
  );
}
