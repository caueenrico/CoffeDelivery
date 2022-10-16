import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function InputForm({...props}:InputProps ){
  return(
    <InputStyleContainer {...props}/>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <InputStyleContainer ref={ref} {...props} />
  )
}