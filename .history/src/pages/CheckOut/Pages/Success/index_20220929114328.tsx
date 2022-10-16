import { ContainerFlex } from "./styles";
import motoboy from './assets/motoboy.svg';

export function Success() {
  return (
    <ContainerFlex>
      <img src={motoboy} alt="" />
    </ContainerFlex>
  )
}