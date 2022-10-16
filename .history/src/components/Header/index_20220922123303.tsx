import { HeaderContainer, NavHeaders } from "./styles";
import logo from '../assets/logo.svg';
import { Locations } from "../Locations";
import { Cart } from "../Cart";
import { NavLink } from "react-router-dom";


export function Header() {
  return (
    <HeaderContainer>
      
      <img src={logo} alt="" />

      <NavHeaders>
        <Locations />

        <NavLink to='/checkout'>
          <Cart/>
        </NavLink>
        
      </NavHeaders>
    </HeaderContainer>
  );
}
