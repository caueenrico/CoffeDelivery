import { InputNumber } from "../../../../components/IpuntNumber";
import { RemoveButton } from "../RemoveButton";
import { SelectedStyles } from "./styles";

import tradicional from "../../../../../public/coffees/tradicional.png";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { CoffeeProps } from "../../../../components/CoffeCards";

export function SelectedCoffes({ coffee }: CoffeeProps) {
  const { cartItens } = useContext(CartContext);

  return (
    <SelectedStyles>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <div className="dataContent">
        <h1 className="text">{coffee.name}</h1>
        <div className="buttons">
          <InputNumber
          
          />
          <RemoveButton />
        </div>
      </div>

      <div className="price">
        <p>{coffee.}</p>
      </div>
    </SelectedStyles>
  );
}
