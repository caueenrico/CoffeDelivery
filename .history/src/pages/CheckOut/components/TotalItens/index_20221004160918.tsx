
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { Container, Text, TotalBold, Valor } from "./styles";



export function TotalItens() {
  const {cartItemTotal} = useContext(CartContext);
  const PriceDelivery = formatMoney(3.50) ;

  const totalCoffes = formatMoney(cartItemTotal()) ;

  return (
    <Container>
      <div>
        <Text>Total de itens</Text>
        <Valor>R$ {totalCoffes}</Valor>
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
