import { InputNumber } from "../../../../components/IpuntNumber";

import { RemoveButton, SelectedStyles } from "./styles";

import { useContext, useState } from "react";
import { CartContext, CartItens } from "../../../../context/CartContext";

import { formatMoney } from "../../../../utils/formatMoney";
import { Trash } from "phosphor-react";

interface CoffeeSelectedProps {
  coffee: CartItens;
}

export function SelectedCoffes({ coffee }: CoffeeSelectedProps) {
  const { changeCartItemQuantity} = useContext(CartContext);
  const totalPrice = coffee.quantity * coffee.price;
  const formatedPrice = formatMoney(totalPrice)

  function handleIncrement() {
    changeCartItemQuantity(coffee.id, 'increment');
  }

  function handleDecrement() {
    changeCartItemQuantity(coffee.id, 'decrement');
  }
  
  fun

  return (
    <SelectedStyles>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <div className="dataContent">
        <h1 className="text">{coffee.name}</h1>
        <div className="buttons">
          <InputNumber
            decrement={handleDecrement}
            increment={handleIncrement}
            quantity={coffee.quantity}
          />
          
          <RemoveButton>
            <Trash size={16} color='#8047F8'/> remover
          </RemoveButton>
          
        </div>
      </div>

      <div className="price">
        <p>R$ {formatedPrice}</p>
      </div>
    </SelectedStyles>
  );
}
