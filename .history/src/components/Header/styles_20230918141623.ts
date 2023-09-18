import styled from "styled-components";

export const HeaderContainer = styled.div`
  
  min-height: 104px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 160px;
  
  background-color: ${props => props.theme['background']};

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  @media (max-width: 1024px) {
    padding: 16px 80px;
  }

  @media (max-width: 768px) {
    padding: 16px 40px;
  }

  
  
`
export const NavHeaders = styled.nav`
  display: flex;
  gap: 12px;

`
