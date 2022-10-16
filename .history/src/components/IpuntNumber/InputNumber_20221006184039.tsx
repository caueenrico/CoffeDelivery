import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer, MinimusB, PlusB } from "./styles";
import { InputNumberProps } from "./index";



export function InputNumber({ quantity, increment, decrement }: InputNumberProps): JSX.Element {
  return (
    <InputNumberContainer>

      <MinimusB disabled={quantity <= 1} onClick={decrement}>
        <Minus size={14} weight="fill" />
      </MinimusB>

      <input
        type="number"
        value={quantity} />

      <PlusB onClick={increment}>
        <Plus size={14} weight="fill" />
      </PlusB>

    </InputNumberContainer>
  );
}
