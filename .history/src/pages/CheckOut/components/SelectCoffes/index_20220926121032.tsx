import { Container } from "./styles";
import tradicional from "../../../../../public/coffees/tradicional.png";
import { TextCheck } from "../TextosCheck";
import { InputNumber } from "../../../../components/IpuntNumber";
import { RemoveButton } from "../RemoveButton";

export function SelectCoffes() {
  return (
    <>
    <Container>
      <img src={tradicional} alt="" />

      <div className="dataContent">
        <h1 className="text">Expresso Tradicional</h1>
          <div className="buttons">
          <InputNumber />
          <RemoveButton />
        </div>
      </div>

      <div className="price">
        <p>R$ 9.90</p>
      </div>
    </Container>
    </>F
  );
}
