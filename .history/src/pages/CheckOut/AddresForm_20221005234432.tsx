import { AddressFormContainer } from "./styles";
import { InputForm } from "../../components/InpuitForm";
import { useFormContext } from "react-hook-form/dist/useFormContext";

export function AddressForm() {
  const { register } = useFormContext();

  // {...register("cep")}

  return (
    <AddressFormContainer>
      <InputForm placeholder="CEP" type="number" className="cep" {...register("cep")} />
      <InputForm placeholder="Rua" className="street" />
      <InputForm placeholder="Número" type="number" />
      <InputForm placeholder="Complemento" className="complemento" />
      <InputForm placeholder="Bairro" />
      <InputForm placeholder="Cidade" />
      <InputForm placeholder="UF" />
    </AddressFormContainer>
  );
}
