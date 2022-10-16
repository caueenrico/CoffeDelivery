import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>

exort function InputForm({...props}:InputProps ){
  repturn(
    <InputStyleContainer {...props}/>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
  return (
    <InputStyleContainer ref={ref} {...props} />
  )
})