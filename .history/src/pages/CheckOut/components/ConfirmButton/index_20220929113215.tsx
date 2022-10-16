import { NavLink } from "react-router-dom";
import { ButtonConfirm } from "./styles";

export function ConfirmButton() {
  return (
      <NavLink>
      <ButtonConfirm>
        Confirmar Pedido
      </ButtonConfirm>
      </NavLink>
   
  );
}