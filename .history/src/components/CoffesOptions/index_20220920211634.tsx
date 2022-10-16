import { CoffesContainer} from "./styled";
import { CoffeCards } from "../CoffeCards";
import { coffees } from "../../data/CoffesOK";


export function CoffesOptions() {
  return (
    <CoffesContainer>
      {coffees.map((coffee)=>
      <CoffeCards key={coffees}/>
      )}
      {/* <CoffeCards/>
      <CoffeCards/>
      <CoffeCards/>
      <CoffeCards/>
      <CoffeCards/> */}

    </CoffesContainer>
  );
}
