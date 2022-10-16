import { CreditCard } from "phosphor-react"
import { ReactNode } from "react"
import { PaymentMethodos } from "./styles"

interface PagamentosProps {
  icon: ReactNode
  title: string
}

export function MetodosdePagamentos({icon, title} : PagamentosProps){
  funcition handlePaymentMethod(){
    console.log('teste')
  }

  return(
    <PaymentMethodos onClick={}>
      {icon} {title}
    </PaymentMethodos>
  )
}