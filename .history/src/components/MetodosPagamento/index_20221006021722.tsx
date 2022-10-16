import { CreditCard } from "phosphor-react"
import { ReactNode, useState } from "react"
import { PaymentMethodos } from "./styles"

export interface PagamentosProps {
  icon?: ReactNode
  title: string
}

export function MetodosdePagamentos({icon, title} : PagamentosProps){
  const {metodo, setMetodo} = useState()
  function handlePaymentMethod(){
    console.log(title)
  }

  return(
    <PaymentMethodos onClick={handlePaymentMethod}>
      {icon} {title}
    </PaymentMethodos>
  )
}