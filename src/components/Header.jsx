import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.darkskyblue}; /* Assuming this color from App.jsx */
  color: white;
  padding: 1rem 40px;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-right: 15px;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <Logo onClick={() => navigate('/')}>
        <LogoImg
          src="https://neh.kea.dk/images/logos/cphbusiness_neg.png"
          alt="Logo"
        />
        {/* Optional: Add logo text */}
      </Logo>
      <NavMenu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/vision">Vision</NavItem>
        <NavItem to="/endpoints">Endpoint</NavItem>
        <NavItem to="/links">Links</NavItem>

      </NavMenu>
    </Nav>
  );
};

export default Header;
