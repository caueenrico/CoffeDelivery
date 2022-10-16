import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HtmlHTMLAttributes>

export function InputForm(){
  return(
    <InputStyleContainer />
  )
}