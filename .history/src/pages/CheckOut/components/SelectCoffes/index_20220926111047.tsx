import { Container } from "./styles";
import tradicional from '../../../../../public/coffees/tradicional.png'
import { TextCheck } from "../TextosCheck";

export function SelectCoffes(){
  return( 
    <Container>
      <img src={tradicional} alt="" />
      <div>
        <TextCheck 
        title="Expresso Tradicional"
        />

        
      </div>
    </Container>
  )
}