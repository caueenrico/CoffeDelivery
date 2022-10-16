import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { MetodosdePagamentos } from "../../../../components/MetodosPagamento";
import {
  ContainerCheckOut,
  MetodosDePagamentoContainer,
  PaymentContainer,
} from "./styles";
import { TextCheck } from "../TextosCheck";


export const MetodosDePagamentoOpn = {
  credito: {
    <title></title>
  }
}

export function PaymenteMethodo() {
  return (
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
  );
}
