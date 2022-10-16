import { InputNumber } from "../../../../components/IpuntNumber";
import { RemoveButton } from "../RemoveButton";
import { SelectedStyles } from "./styles";

import { useContext, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { CoffeeProps } from "../../../../components/CoffeCards";
import { formatMoney } from "../../../../utils/formatMoney";

export function SelectedCoffes({ coffee }: CoffeeProps) {
  const formatedPrice = formatMoney(coffee.price)
  const { cartItens } = useContext(CartContext);

  function quantityCartItens() {
    const quantidadeNoCarrinho = cartItens.map((quantity) => quantity);
    return quantidadeNoCarrinho;
  }

  const [quantity, setQuantity] = useState(quantityCartItens());

  return (
    <SelectedStyles>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <div className="dataContent">
        <h1 className="text">{coffee.name}</h1>
        <div className="buttons">
          <InputNumber
            quantity={quantity}
            
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
