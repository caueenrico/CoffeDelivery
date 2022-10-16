
import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer, MinimusB, PlusB } from "./styles";

export function InputNumber(){
  

  return(
    <InputNumberContainer>
      <MinimusB>
        <Minus size={14} weight="fill"/>
      </MinimusB>
      <input type="number" readOnly value={1} />
      <PlusB>
        <Plus size={14} weight="fill" />
      </PlusB>
    </InputNumberContainer>
  )
}