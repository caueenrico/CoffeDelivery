import { CreditCard } from "phosphor-react"
import { ReactNode, useState } from "react"
import { PaymentMethodos } from "./styles"

export interface PagamentosProps {
  icon?: ReactNode
  title: string
}

export function MetodosdePagamentos(){
 

  return(
    <PaymentMethodos >
      {icon} {title}
    </PaymentMethodos>
  )
}