import { InputForm } from "../../components/InpuitForm";
import { AddressFormContainer } from "./styles";



export function AddressForm(){
  return(
    <AddressFormContainer>
      <InputForm placeholder="CEP" type='number' className="cep"/>
      <InputForm placeholder="Rua" className="street"/>
      <InputForm placeholder="Número" type='number' className="cep"/>
    </AddressFormContainer>
  )
}