
import { useContext } from "react";
import { Container, Text, TotalBold, Valor } from "./styles";

export function TotalItens() {
  const {} = useContext(CartContext);

  return (
    <Container>
      <div>
        <Text>Total de itens</Text>
        <Valor>R$ 29,70</Valor>
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
