import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const InputForm = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
  return (
    <Input
    <InputStyleContainer {...props}  ref={ref} />
  )
})