
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { Container, Text, TotalBold, Valor } from "./styles";

export function TotalItens() {
  const {cartItemTotal} = useContext(CartContext);

  const total = cartItemTotal();

  return (
    <Container>
      <div>
        <Text>Total de itens</Text>
        <Valor>{}</Valor>
      </div>
      <div>
        <Text>Entrega</Text>
        <Valor>R$ 3,50</Valor>
      </div>
      <div>
        <TotalBold>Entrega</TotalBold>
        <TotalBold>R$ 33,20</TotalBold>
      </div>
    </Container>
  );
}
