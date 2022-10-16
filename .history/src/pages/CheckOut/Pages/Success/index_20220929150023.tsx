import { ContainerFlex } from "./styles";
import motoboy from './assets/motoboy.svg';
import { SendRequest } from "./components/SendRequest";

export function Success() {
  return (
    <ContainerFlex>
      <SendRequest/>
      <img src={motoboy} alt="" className=""/>
    </ContainerFlex>
  )
}