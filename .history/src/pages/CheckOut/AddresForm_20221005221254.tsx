import { InputForm } from "../../components/InpuitForm";
import { AddressFormContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

const confirmOrderFormSchema = zod.object({
  cep: zod.string(),
})


export function AddressForm(){
  const confirmOrderForm = useForm({
    resolver: zodResolver(confirmOrderFormSchema),
  });

  return(
    <AddressFormContainer>
      <InputForm placeholder="CEP" type='number' className="cep"/>
      <InputForm placeholder="Rua" className="street"/>
      <InputForm placeholder="Número" type='number'/>
      <InputForm placeholder="Complemento" className="complemento"/>
      <InputForm placeholder="Bairro" />
      <InputForm placeholder="Cidade"/>
      <InputForm placeholder="UF"/>
    </AddressFormContainer>
  )
}