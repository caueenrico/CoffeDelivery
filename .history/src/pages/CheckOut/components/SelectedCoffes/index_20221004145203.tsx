import { InputNumber } from "../../../../components/IpuntNumber";
import { RemoveButton } from "../RemoveButton";
import { SelectedStyles } from "./styles";

import { useContext, useState } from "react";
import { CartContext, CartItens } from "../../../../context/CartContext";
import { CoffeeProps } from "../../../../components/CoffeCards";
import { formatMoney } from "../../../../utils/formatMoney";

interface CoffeeSelectedProps {
  coffee: CartItens;
}

export function SelectedCoffes({ coffee }: CoffeeSelectedProps) {
  const formatedPrice = formatMoney(coffee.price)
  const { cartItens } = useContext(CartContext);
  const totalPrice = coffee.quantity * formatedPrice;

  return (
    <SelectedStyles>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <div className="dataContent">
        <h1 className="text">{coffee.name}</h1>
        <div className="buttons">
          <InputNumber
            quantity={coffee.quantity}
            
          />
          <RemoveButton />
        </div>
      </div>

      <div className="price">
        <p>R$ {formatedPrice}</p>
      </div>
    </SelectedStyles>
  );
}
