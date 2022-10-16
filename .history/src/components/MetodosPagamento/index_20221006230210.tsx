import { CreditCard } from "phosphor-react";
import { forwardRef, InputHTMLAttributes, ReactNode, useState } from "react";
import { ContentContainer, PaymentMethodos } from "./styles";

type MetodosdePagamentosProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  icon: ReactNode;
};

export const MetodosdePagamentos = forwardRef<HTMLInputElement,MetodosdePagamentosProps>(
  ({ id, icon, title, ...props }, ref) => {
  return (
    <PaymentMethodos>
      
      <input type="radio" id={id} {...props} name="MetodosDePagamentoOpn" ref={ref}/>
      
        <label htmlFor={id}>
        {icon} {title}
        </label>
      </ContentContainer>
    </PaymentMethodos>
  );
});
