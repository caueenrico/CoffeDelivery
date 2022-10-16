import { ContainerFlex } from "./styles";
import motoboy from './assets/motoboy.s';

export function Success() {
  return (
    <ContainerFlex>
      <img src={motoboy} alt="" />
    </ContainerFlex>
  )
}