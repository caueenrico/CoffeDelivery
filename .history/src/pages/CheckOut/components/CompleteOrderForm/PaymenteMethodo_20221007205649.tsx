import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { MetodosdePagamentos } from "../../../../components/MetodosPagamento";
import {
  ContainerCheckOut,
  MetodosDePagamentoContainer,
  PaymentContainer,
} from "./styles";
import { TextCheck } from "../TextosCheck";
import { useFormContext } from "react-hook-form";

export const MetodosDePagamentoOpn = {
  credito: {
    title: "Cartão de Crédito",
    icon: <CreditCard size={16} color="#8047F8" />,
  },
  debito: {
    title: "Cartão de Débito",
    icon: <Bank size={16} color="#8047F8" />,
  },
  dinheiro: {
    title: "Dinheiro",
    icon: <Money size={16} color="#8047F8" />,
  },
};

export function PaymenteMethodo() {
  const { register, formState:{errors} } = useFormContext()

  const metodoDePagamentoERROR = errors.metodoDePagamento?.message as unknown as string;
  
  return (
    <PaymentContainer>
      <ContainerCheckOut>
        <TextCheck
          icon={<CurrencyDollar size={22} color="#8047F8" />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <MetodosDePagamentoContainer>
          {Object.entries(MetodosDePagamentoOpn).map(
            ([key, { title, icon }]) => (
              <MetodosdePagamentos
                id={key}
                key={title}
                title={title}
                icon={icon}
                value={key}
                {...register("MetodosDePagamentoOpn")}
              />
            )
          )}
        </MetodosDePagamentoContainer>
      </ContainerCheckOut>
    </PaymentContainer>
  );
}
