import { InputForm } from "../../components/InpuitForm";
import { AddressFormContainer } from "./styles";



export function AddressForm(){
  return(
    <AddressFormContainer>
      <InputForm placeholder="cep" type='' className="cep"/>
    </AddressFormContainer>
  )
}