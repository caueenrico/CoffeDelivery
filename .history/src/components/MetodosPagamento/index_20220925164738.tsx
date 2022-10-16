import { CreditCard } from "phosphor-react"
import { ReactNode } from "react"
import { PaymentMethodos } from "./styles"

interface PagamentosProps {
  icon: ReactNode
  title: string
}

export function MetodosdePagamentos({}){
  return(
    <PaymentMethodos>
      <CreditCard size={16} color='#8047F8'/> Cartão de Crédito
    </PaymentMethodos>
  )
}