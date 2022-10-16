
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { Container, Text, TotalBold, Valor } from "./styles";



export function TotalItens() {
  const {cartItemTotal} = useContext(CartContext);
  const PriceDelivery = formatMoney(3.50) ;
  const totalCoffes = formatMoney(cartItemTotal()) ;
  const total = formatMoney(cartItemTotal() + 3.50) ;

  return (
    <Container>
      <div>
        <Text>Total de itens</Text>
        <Valor>R$ {totalCoffes}</Valor>
      </div>
      <div>
        <Text>Entrega</Text>
        <Valor>R$ {PriceDelivery}</Valor>
      </div>
      <div>
        <TotalBold>Entrega</TotalBold>
        <TotalBold>R$ {total}</TotalBold>
      </div>
    </Container>
  );
}
