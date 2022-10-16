import { UNSAFE_enhanceManualRouteObjects } from "react-router-dom";

export function TotalItens() {
  const { totalItens } = UNSAFE_enhanceManualRouteObjects();

  return (
    <Container>
      <TextTotal>Valor Total</TextTotal>
      <TextTotal>{totalItens}</TextTotal>
    </Container>
  );
}