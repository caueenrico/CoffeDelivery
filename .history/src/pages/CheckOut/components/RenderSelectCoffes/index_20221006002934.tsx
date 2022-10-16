import { Container } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { SelectedCoffes } from "../SelectedCoffes";
import { TotalItens } from "../TotalItens";

export function RenderSelectCoffes() {
  const { cartItens } = useContext(CartContext);

  return (
    <>
      <Container>
        {cartItens.map((coffee) => (
          <SelectedCoffes key={coffee.id} coffee={coffee} />
        ))}
      </Container>

      <TotalItens />

      
    </>
  );
}
