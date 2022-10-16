import { CoffesContainer} from "./styled";
import { CoffeCards } from "../CoffeCards";
import { coffees } from "../../data/CoffesOK";


export function CoffesOptions() {
  return (
    <CoffesContainer>
      {coffees.map((coffee)=>
      <CoffeCards key={coffee}/>
      )}
      {/* <CoffeCards/>
      <CoffeCards/>
      <CoffeCards/>
      <CoffeCards/>
      <CoffeCards/> */}

    </CoffesContainer>
  );
}
