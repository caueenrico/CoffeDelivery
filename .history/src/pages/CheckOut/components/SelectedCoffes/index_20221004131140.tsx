import { InputNumber } from "../../../../components/IpuntNumber";
import { RemoveButton } from "../RemoveButton";
import { SelectedStyles } from "./styles";

import tradicional from "../../../../../public/coffees/tradicional.png";
import { useContext } from "react";

export function SelectedCoffes() {
  const { cartItens } = useContext(CartContext);

  return (
    <SelectedStyles>
      <img src={tradicional} alt="" />

      <div className="dataContent">
        <h1 className="text">Expresso Tradicional</h1>
        <div className="buttons">
          <InputNumber
            increment={handleIncrement}
            decrement={handleDecrement}
            quantity={quantity}
          />
          <RemoveButton />
        </div>
      </div>

      <div className="price">
        <p>R$ 9.90</p>
      </div>
    </SelectedStyles>
  );
}
