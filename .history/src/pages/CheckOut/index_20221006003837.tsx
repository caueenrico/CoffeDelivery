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


import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { AddressForm } from "./components/CompleteOrderForm/AddresForm";
import { PaymentMethodos } from "../../components/MetodosPagamento/styles";
import { PaymenteMethodo } from "./components/CompleteOrderForm/PaymenteMethodo";

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
