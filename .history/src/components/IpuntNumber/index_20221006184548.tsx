
import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer, MinimusB, PlusB } from "./styles";

interface InputNumberProps {
  quantity: number;
  increment: () => void;
  decrement: () => void;
}


export function InputNumber({quantity, increment, decrement}: InputNumberProps){
  return(
    <InputNumberContainer>

      <MinimusB disabled={quantity<=1} onClick={decrement} > 
        <Minus size={14} weight="fill"/>
      </MinimusB>

      <input 
      type="number" 
      value={quantity}
     
      />

      <PlusB onClick={increment} >
        <Plus size={14} weight="fill" />
      </PlusB>

    </InputNumberContainer>
  )
}