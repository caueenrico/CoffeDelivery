import styled from "styled-components";

export const HeaderContainer = styled.div`
  
  min-height: 104px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 32px 160px;
  
  background-color: ${props => props.theme['background']};

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  
`
export const NavHeaders = styled.nav`
  display: flex;
  gap: 12px;

`
