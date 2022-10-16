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
import { ContainerForm } from "./styles";
import { CheckOutIndex } from "./components/CompleteOrderForm/CheckOutIndex";
import { PaymenteMethodo } from "./components/CompleteOrderForm/PaymenteMethodo";

enum MetodosDePagamentoOpn {
  credito = "credito",
  debito = "debito",
  dinheiro = "dinheiro",
}

const confirmOrderFormSchema = zod.object({
  cep: zod.string().min(1, 'CEP obrigatório'),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  MetodosDePagamentoOpn: zod.nativeEnum()
});

export type OrderData = zod.infer<typeof confirmOrderFormSchema>;

type ConfirmOrderFormData = OrderData;

export function PageForm() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data);
  }

  return (
    <>
    <FormProvider {...confirmOrderForm}>
      <ContainerForm onSubmit={handleSubmit(handleConfirmOrder)} >
        <CheckOutIndex/>
      </ContainerForm>
    </FormProvider>
    
    </>
  );
}
