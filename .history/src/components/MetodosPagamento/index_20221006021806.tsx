import { CreditCard } from "phosphor-react"
import { ReactNode, useState } from "react"
import { PaymentMethodos } from "./styles"

export interface PagamentosProps {
  icon?: ReactNode
  title: string
}

export function MetodosdePagamentos({icon, title} : PagamentosProps){
  const {metodo, setMetodo} = useState([title])
  function handlePaymentMethod(){
    setMetodo(title)
  }

  return(
    <PaymentMethodos onClick={handlePaymentMethod}>
      {icon} {title}
    </PaymentMethodos>
  )
}