
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { InputNumberContainer, MinimusB, PlusB } from "./styles";

export function InputNumber(){


  return(
    <InputNumberContainer>
      <MinimusB>
        <Minus size={14} weight="fill"/>
      </MinimusB>
      <input 
      type="number" 
      value={num} 
      min={1}
      max={60}
      />
      <PlusB onClick={countCoffe}>
        <Plus size={14} weight="fill" />
      </PlusB>
    </InputNumberContainer>
  )
}