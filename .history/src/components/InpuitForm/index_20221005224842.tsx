import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function InputForm({...props}:InputProps ){
  return(
    <InputStyleContainer {...props}/>
  )
}

export const Input 