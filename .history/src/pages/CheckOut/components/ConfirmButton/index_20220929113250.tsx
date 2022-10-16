import { NavLink } from "react-router-dom";
import { ButtonConfirm } from "./styles";

export function ConfirmButton() {
  return (
 
      <ButtonConfirm>
        <NavLink to="/checkout/success"></NavLink>
        Confirmar Pedido
        
      </ButtonConfirm>
   
  );
}
