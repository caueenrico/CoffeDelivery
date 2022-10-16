import { CreditCard } from "phosphor-react"
import { ReactNode } from "react"
import { PaymentMethodos } from "./styles"

// interface PagamentosProps {
//   icon: ReactNode
//   title: string
// }

export function MetodosdePagamentos(){
  return(
    <PaymentMethodos>
      <CreditCard size={}/> Cartão de Crédito
    </PaymentMethodos>
  )
}