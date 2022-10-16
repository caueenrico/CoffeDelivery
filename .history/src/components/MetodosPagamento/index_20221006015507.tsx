import { CreditCard } from "phosphor-react"
import { ReactNode } from "react"
import { PaymentMethodos } from "./styles"

interface PagamentosProps {
  icon: ReactNode
  title: string
}

export function MetodosdePagamentos({icon, title} : PagamentosProps){
  funci

  return(
    <PaymentMethodos onClick={}>
      {icon} {title}
    </PaymentMethodos>
  )
}