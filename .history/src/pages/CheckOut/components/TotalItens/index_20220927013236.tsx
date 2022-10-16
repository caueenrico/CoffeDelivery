export function TotalItens() {
  const { totalItens } = useCart();

  return (
    <Container>
      <TextTotal>Valor Total</TextTotal>
      <TextTotal>{totalItens}</TextTotal>
    </Container>
  );
}