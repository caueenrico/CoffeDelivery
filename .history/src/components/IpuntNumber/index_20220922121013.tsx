
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { InputNumberContainer, MinimusB, PlusB } from "./styles";

export function InputNumber(){
  
  function A

  return(
    <InputNumberContainer>
      <MinimusB>
        <Minus size={14} weight="fill"/>
      </MinimusB>
      <input 
      type="number" 
      readOnly 
      value={1} 
      min={1}
      max={60}
      />
      <PlusB>
        <Plus size={14} weight="fill" />
      </PlusB>
    </InputNumberContainer>
  )
}