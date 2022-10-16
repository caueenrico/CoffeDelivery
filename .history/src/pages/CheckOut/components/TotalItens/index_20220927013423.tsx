import { UNSAFE_enhanceManualRouteObjects } from "react-router-dom";

export function TotalItens() {
  return (
    <Container>
      <Text>Total de itens</Text>
      <TextTotal>{totalItens}</TextTotal>
    </Container>
  );
}