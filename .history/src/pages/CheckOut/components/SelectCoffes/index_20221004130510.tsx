import { Container } from "./styles";
import tradicional from "../../../../../public/coffees/tradicional.png";
import { TextCheck } from "../TextosCheck";
import { InputNumber } from "../../../../components/IpuntNumber";
import { RemoveButton } from "../RemoveButton";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { SelectedCoffes } from "../SelectedCoffes";

export function SelectCoffes() {
  const { cartItens } = useContext(CartContext); 

  

  return (
    <>
      <Container>
        <SelectedCoffes />
        <SelectedCoffes />
        <SelectedCoffes />
        
        
        
      </Container>
    </>
  );
}
