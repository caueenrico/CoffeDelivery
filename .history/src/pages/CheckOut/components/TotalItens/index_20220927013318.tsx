import { UNSAFE_enhanceManualRouteObjects } from "react-router-dom";

export function TotalItens() {
  return (
    <Container>
      <TextTotal>Total </TextTotal>
      <TextTotal>{totalItens}</TextTotal>
    </Container>
  );
}