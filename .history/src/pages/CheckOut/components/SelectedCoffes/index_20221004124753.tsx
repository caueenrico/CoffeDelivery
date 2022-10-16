import { InputNumber } from "../../../../components/IpuntNumber";
import { RemoveButton } from "../RemoveButton";

export function SelectedCoffes(){
  return (
    <>
    <img src={tradicional} alt="" />

    <div className="dataContent">
      <h1 className="text">Expresso Tradicional</h1>
      <div className="buttons">
        <InputNumber 
        
        />
        <RemoveButton />
      </div>
    </div>

    <div className="price">
      <p>R$ 9.90</p>
    </div>
  )
}