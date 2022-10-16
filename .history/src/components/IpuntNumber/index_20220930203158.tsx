
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { InputNumberContainer, MinimusB, PlusB } from "./styles";

interface InputNumberProps {
  quantity: number;
  increment: () => void;
  decrement: () => void;
}


export function InputNumber({}){
  return(
    <InputNumberContainer>
      <MinimusB> 
        <Minus size={14} weight="fill"/>
      </MinimusB>
      <input 
      type="number" 
      value={1}
      />
      <PlusB >
        <Plus size={14} weight="fill" />
      </PlusB>
    </InputNumberContainer>
  )
}