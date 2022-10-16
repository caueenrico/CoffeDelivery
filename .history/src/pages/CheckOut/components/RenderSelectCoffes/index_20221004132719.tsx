import { Container } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { SelectedCoffes } from "../SelectedCoffes";

export function RenderSelectCoffes() {
  const { cartItens } = useContext(CartContext);

  return (
    <Container>
      {cartItens.map((coffee) => (

      <SelectedCoffes />
      <SelectedCoffes />
      <SelectedCoffes />
      <SelectedCoffes />
    </Container>
  );
}
