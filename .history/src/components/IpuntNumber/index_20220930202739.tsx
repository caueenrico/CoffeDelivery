
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { InputNumberContainer, MinimusB, PlusB } from "./styles";

export function InputNumber(){
  const [quantity, setQuantity] = useState(1)


  return(
    <InputNumberContainer>
      <MinimusB>
        <Minus size={14} weight="fill"/>
      </MinimusB>
      <input 
      type="number" 
      value={quantity}
      />
      <PlusB >
        <Plus size={14} weight="fill" />
      </PlusB>
    </InputNumberContainer>
  )
}