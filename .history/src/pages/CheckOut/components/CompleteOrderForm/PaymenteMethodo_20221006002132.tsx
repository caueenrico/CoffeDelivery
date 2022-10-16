import { ContainerCheckOut, PaymentContainer } from "../../styles";
import { TextCheck } from "../TextosCheck";

<PaymentContainer>
          <ContainerCheckOut>
            <TextCheck
              icon={<CurrencyDollar size={22} color="#8047F8" />}
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <MetodosDePagamentoContainer>
              <MetodosdePagamentos
                icon={<CreditCard size={16} color="#8047F8" />}
                title="Cartão de Crédito"
              />
              <MetodosdePagamentos
                icon={<Bank size={16} color="#8047F8" />}
                title="Cartão de Débito"
              />
              <MetodosdePagamentos
                icon={<Money size={16} color="#8047F8" />}
                title="Dinheiro"
              />
            </MetodosDePagamentoContainer>
          </ContainerCheckOut>
        </PaymentContainer>