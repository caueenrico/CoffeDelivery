import { Container } from "./styles";
import tradicional from '../../../../../public/coffees/tradicional.png'
import { TextCheck } from "../TextosCheck";
import { InputNumber } from "../../../../components/IpuntNumber";

export function SelectCoffes(){
  return( 
    <Container>
      <img src={tradicional} alt="" />
      <div className="dataContent">
        <h1 className="">Expresso Tradicional</h1>
        <InputNumber/>

        
      </div>
    </Container>
  )
}