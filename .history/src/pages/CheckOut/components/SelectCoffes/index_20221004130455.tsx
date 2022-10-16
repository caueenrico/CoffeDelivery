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
         padding-bottom: 24px;

  min-width: 23rem;
  padding-top: 24px;
  
  :nth-child(1){
    padding-top: 0px;
    border-bottom: 1px solid #E6E5E5;
  }
        
        
      </Container>
    </>
  );
}
