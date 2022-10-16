import { UNSAFE_enhanceManualRouteObjects } from "react-router-dom";
import { Container, Text, TotalBold, Valor } from "./styles";

export function TotalItens() {
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
        <TotalBold>R$ 3,50</TotalBold>
      </div>
    </Container>
  );
}
