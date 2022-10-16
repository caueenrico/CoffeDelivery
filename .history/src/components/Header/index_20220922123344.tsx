import { HeaderContainer, NavHeaders } from "./styles";
import logo from '../assets/logo.svg';
import { Locations } from "../Locations";
import { Cart } from "../Cart";
import { NavLink } from "react-router-dom";


export function Header() {
  return (
    <HeaderContainer>
      <NavLink to='/'>
      <img src={logo} alt="" />
      </NavLink>
      
      <NavHeaders>
        <Locations />

        <NavLink to='/checkout'>
          <Cart/>
        </NavLink>
        
      </NavHeaders>
    </HeaderContainer>
  );
}
