import { HeaderContainer, NavHeaders } from "./styles";
import logo from '../assets/logo.svg';
import { Locations } from "../Locations";
import { Cart } from "../Cart";


export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <NavHeaders>
        <Locations />
        <Cart/>
      </NavHeaders>
    </HeaderContainer>
  );
}
