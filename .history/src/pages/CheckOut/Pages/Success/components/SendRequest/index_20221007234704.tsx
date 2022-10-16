import { Container, ContainerLinear, SendRequestCont, SuccessMesagage } from "./styles";
import IconLocal from "../../assets/Icon.svg";
import IconTempo from "../../assets/Icon-1.svg";
import IconPay from "../../assets/Icon-2.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { PaymentMethodos } from "../../../../../../components/MetodosPagamento/styles";
import { OrderData } from "../../../..";
import { useEffect } from "react";

interface LocationState {
  state: OrderData
}



export function SendRequest( ) {
  const { state } = useLocation() as unknown as LocationState;

  const navigate = useNavigate();

  useEffect(() => {
    if(!state){
      navigate("/")
    }
  }, [])

  if(!state){
    return <></>
  }


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
            <span>{state.district} - {state.city}, {state.uf}</span>
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
            <span> <strong>{ MetodosDePagamentoOpn[state.MetodosDePagamentoOpn]} </strong> </span>
          </div>
        </Container>

      </ContainerLinear>
    </SendRequestCont>
  );
}
