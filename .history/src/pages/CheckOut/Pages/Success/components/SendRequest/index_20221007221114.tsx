import { Container, ContainerLinear, SendRequestCont, SuccessMesagage } from "./styles";
import IconLocal from "../../assets/Icon.svg";
import IconTempo from "../../assets/Icon-1.svg";
import IconPay from "../../assets/Icon-2.svg";
import { useLocation } from "react-router-dom";




export function SendRequest( ) {
  const { state } = useLocation();

  console.log(state);

  return (
    <SendRequestCont>
      <SuccessMesagage>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </SuccessMesagage>

      <ContainerLinear>

        <Container>
          <img src={IconLocal} alt="" />
          <div>
            <p>Entrega em <strong> {state.street}, {state.number}</strong> </p>
            <span>{Farrapos} - Porto Alegre, RS</span>
          </div>
        </Container>

        <Container>
          <img src={IconTempo} alt="" />
          <div>
            <p>Previsão de entrega</p>
            <span> <strong> 20 min - 30 min</strong> </span>
          </div>
        </Container>

        <Container>
          <img src={IconPay} alt="" />
          <div>
            <p>Pagamento na entrega</p>
            <span> <strong> </strong> </span>
          </div>
        </Container>

      </ContainerLinear>
    </SendRequestCont>
  );
}
