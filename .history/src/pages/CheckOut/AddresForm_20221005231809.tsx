
import { AddressFormContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { InputForm } from "../../components/InpuitForm";

const confirmOrderFormSchema = zod.object({
  cep: zod.string(),
});

export type OrderData = zod.infer<typeof confirmOrderFormSchema>;

type ConfirmOrderFormData = OrderData

export function AddressForm() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormSchema),
  });
  const {...register} = useFormContext();

  const {handleSubmit} = confirmOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  

  return (
    <FormProvider {...confirmOrderForm}>
      <AddressFormContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <InputForm placeholder="CEP" type="number" className="cep" {...register("cep")} />
        <InputForm placeholder="Rua" className="street" />
        <InputForm placeholder="Número" type="number" />
        <InputForm placeholder="Complemento" className="complemento" />
        <InputForm placeholder="Bairro" />
        <InputForm placeholder="Cidade" />
        <InputForm placeholder="UF" />
      </AddressFormContainer>
    </FormProvider>
  );
}
