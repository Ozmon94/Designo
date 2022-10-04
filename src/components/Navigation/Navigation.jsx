import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoDark from "assets/shared/desktop/logo-dark.png";
import { ReactComponent as Hamburger } from "assets/shared/mobile/icon-hamburger.svg";
import { ReactComponent as Close } from "assets/shared/mobile/icon-close.svg";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <Wrapper>
      <LogoWrapper to="/">
        <LogoImg src={LogoDark} alt="Designo Logo" />
      </LogoWrapper>
      <MobileNavigation>
        <NavButton onClick={handleOnClick}>
          {isOpen ? <Close /> : <Hamburger />}
        </NavButton>
        <MobileListWrapper isOpen={isOpen}>
          <MobileList>
            <MobileLink to="/about">Our company</MobileLink>
            <MobileLink to="/locations">Locations</MobileLink>
            <MobileLink to="/contact">Contact</MobileLink>
          </MobileList>
        </MobileListWrapper>
      </MobileNavigation>
      <DesktopNavigation>
        <DesktopLink to="/about">Our company</DesktopLink>
        <DesktopLink to="/locations">Locations</DesktopLink>
        <DesktopLink to="/contact">Contact</DesktopLink>
      </DesktopNavigation>
    </Wrapper>
  );
};

const DesktopLink = styled(Link)``;

const MobileLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 2px;
  font-size: 24px;
`;
const MobileList = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const MobileListWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: calc(100vh - 96px);
  top: 96px;
  left: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const MobileNavigation = styled.div`
  @media screen and (min-width: 376px) {
    display: none;
  }
`;

const DesktopNavigation = styled.div`
  display: none;

  @media screen and (min-width: 376px) {
    display: block;
  }
`;
const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 34px 24px;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 202px;
`;
export default Navigation;
