import { SuccessMesagage } from "./styles";
import IconLocal from "./assets/Icon.svg";
import IconTempo from "./assets/Icon-1.svg";
import IconPay from "./assets/icon-2.svg";

export function SendRequest() {
  return (
    <>
      <SuccessMesagage>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </SuccessMesagage>

      <div>

        <div>
          <img src={IconLocal} alt="" />
          <div>
            <p>Entrega em <strong> Rua João Daniel Martinelli, 102</strong> </p>
            <span>Farrapos - Porto Alegre, RS</span>
          </div>
        </div>

        <div>
          <img src={IconTempo} alt="" />
          <div>
            <p>Previsão de entrega</p>
            <span> <strong> 20 min - 30 min</strong> </span>
          </div>
        </div>

        <div>
          <img src={IconPay} alt="" />
          <div>
            <p>Pagamento na entrega</p>
            <span> <strong>Cartão de Crédito</strong> </span>
          </div>
        </div>

      </div>
    </>
  );
}
