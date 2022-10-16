import { CreditCard } from "phosphor-react"
import { InputHTMLAttributes, ReactNode, useState } from "react"
import { PaymentMethodos } from "./styles"

type MetodosdePagamentosProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string
  icon: ReactNode
}

export function MetodosdePagamentos({ id, icon, title, ...props }: MetodosdePagamentosProps) {
 
  return(
    <PaymentMethodos >
    <input type="radio" id={id} {...props} name="MetodosDePagamentoOpn"/>
    <label htmlFor={id}> <

    
    </PaymentMethodos>
  )
}