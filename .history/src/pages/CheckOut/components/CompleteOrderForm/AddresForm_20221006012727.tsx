

import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { InputForm } from "../../../../components/InpuitForm";
import { AddressFormContainer } from "./styles";
import { TextCheck } from "../TextosCheck";

interface ErrosType 

export function AddressForm() {
  const { register } = useFormContext();
  const { error } = formState;

   return (
   <>
      <TextCheck
        icon={<MapPinLine size={22} color="#C47F17" />}
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />
      <AddressFormContainer>
        <InputForm placeholder="CEP" type="number" className="cep" {...register("cep")} />
        <InputForm placeholder="Rua" className="street" />
        <InputForm placeholder="Número" type="number" />
        <InputForm placeholder="Complemento" className="complemento" />
        <InputForm placeholder="Bairro" />
        <InputForm placeholder="Cidade" />
        <InputForm placeholder="UF" />
      </AddressFormContainer>
    </>
  );
}
