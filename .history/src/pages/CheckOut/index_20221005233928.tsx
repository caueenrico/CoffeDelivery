import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "styled-components";
import { MetodosdePagamentos } from "../../components/MetodosPagamento";
import { TilteText } from "../Home/styles";
import { AddressForm } from "./AddresForm";
import { ConfirmButton } from "./components/ConfirmButton";
import { RenderSelectCoffes } from "./components/RenderSelectCoffes";
import { TextCheck } from "./components/TextosCheck";
import { TotalItens } from "./components/TotalItens";
import {
  ContainerCheckOut,
  ContainerColunm,
  ContainerFlex,
  MetodosDePagamentoContainer,
  PaymentContainer,
  SelectCoffesContainer,
  TilteaText,
  ValueContainer,
} from "./styles";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

const confirmOrderFormSchema = zod.object({
  cep: zod.string(),
});


export function CheckOut() {

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormSchema),
  });

  return (
    <FormProvider
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
        <TilteaText>Cafés selecionados</TilteaText>

        <SelectCoffesContainer>
          <RenderSelectCoffes />

          <TotalItens />

          <ConfirmButton />
        </SelectCoffesContainer>
      </ContainerColunm>
    </ContainerFlex>
  );
}
