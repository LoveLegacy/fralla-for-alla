import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/bread.svg";

const Header = () => {
  const Nav = styled.nav`
    display: flex;
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
  `;

  const Logo = styled.img`
    width: 3rem;
  `;

  return (
    <Nav>
      <Logo src={logo} />
      <Link to="/admin">Admin</Link>
    </Nav>
  );
};

export default Header;
