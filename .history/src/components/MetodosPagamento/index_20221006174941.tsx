import { CreditCard } from "phosphor-react"
import { InputHTMLAttributes, ReactNode, useState } from "react"
import { PaymentMethodos } from "./styles"

type MetodosDePagamentoOpn = InputHTMLAttributes<HTMLInputElement> & {
  title: string
  icon: ReactNode

export function MetodosdePagamentos({ id, icon, title, ...props }: MetodosdePagamentosProps) {
 
  return(
    <PaymentMethodos >
    
    </PaymentMethodos>
  )
}