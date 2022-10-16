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
import { AddressForm } from "./components/CompleteOrderForm/AddresForm";
import { PaymentMethodos } from "../../components/MetodosPagamento/styles";

const confirmOrderFormSchema = zod.object({
  cep: zod.string(),
});

export type OrderData = zod.infer<typeof confirmOrderFormSchema>;

type ConfirmOrderFormData = OrderData;

export function CheckOut() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data);
  }

  return (
    <ContainerFlex>
      <ContainerColunm>
        <TilteText>Complete seu pedido</TilteText>

        <FormProvider {...confirmOrderForm}>
          <ContainerCheckOut onSubmit={handleSubmit(handleConfirmOrder)}>
            <TextCheck
              icon={<MapPinLine size={22} color="#C47F17" />}
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
            />

            <AddressForm />
          </ContainerCheckOut>
        </FormProvider>

        <PaymentMethodos/>
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
