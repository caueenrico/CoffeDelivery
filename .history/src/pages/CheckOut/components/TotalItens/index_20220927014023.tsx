import { UNSAFE_enhanceManualRouteObjects } from "react-router-dom";
import { Container, Text, Valor } from "./styles";

export function TotalItens() {
  return (
    <Container>
      <Text>Total de itens</Text>
      <Valor>{totalItens}</Valor>
    </Container>
  );
}