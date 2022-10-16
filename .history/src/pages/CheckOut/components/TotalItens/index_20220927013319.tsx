import { UNSAFE_enhanceManualRouteObjects } from "react-router-dom";

export function TotalItens() {
  return (
    <Container>
      <TextTotal>Total In</TextTotal>
      <TextTotal>{totalItens}</TextTotal>
    </Container>
  );
}