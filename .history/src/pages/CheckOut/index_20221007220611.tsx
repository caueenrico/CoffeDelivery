
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { ContainerForm } from "./styles";
import { CheckOutIndex } from "./components/CompleteOrderForm/CheckOutIndex";
import { useNavigate } from "react-router-dom";

enum MetodosDePagamentoOpn {
  credito = "credito",
  debito = "debito",
  dinheiro = "dinheiro",
}

const confirmOrderFormSchema = zod.object({
  cep: zod.string().min(1, "CEP obrigatório"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  MetodosDePagamentoOpn: zod.nativeEnum(MetodosDePagamentoOpn, {
    errorMap: () => {
      return { message: "Selecione uma forma de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormSchema>;

type ConfirmOrderFormData = OrderData;

export function PageForm() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormSchema),
  });

  // const que vai receber os dados do form e enviar para o backend 
  const { handleSubmit } = confirmOrderForm;

  // const que vai navegar para a proxima pagina
  const navigate = useNavigate();

  // funçao que vai ser chamada quando o form for submetido
  function handleConfirmOrder(data: ConfirmOrderFormData) {
    nav
  }

  return (
    <>
      <FormProvider {...confirmOrderForm}>
        <ContainerForm onSubmit={handleSubmit(handleConfirmOrder)}>
          <CheckOutIndex />
        </ContainerForm>
      </FormProvider>
    </>
  );
}
