import { UNSAFE_enhanceManualRouteObjects } from "react-router-dom";
import { Container, Text, Valor } from "./styles";

export function TotalItens() {
  return (
    <Container>
      <div>
        <Text>Total de itens</Text>
        <Valor>R$ 29,70</Valor>
      </div>
      
    </Container>
  );
}
