import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import burger from "../assets/burger.svg";
import close from "../assets/close.svg";
import Search from "../assets/Search.svg";

const Header = (props) => {
  const [navToggle, setNavToggle] = useState(false);
  // const [modalToggle, setModalToggle] = useState(false);
  const ToggleNav = () => setNavToggle(!navToggle);

  const CloseNav = () => {
    setNavToggle(false);
  };
  const Navigate = [
    { name: "Study", icon: "", route: "/" },
    { name: "Research", icon: "", route: "/" },
    { name: "About Us", icon: "", route: "/" },
  ];
  useEffect(() => {});
  return (
    <>
      <Wrapper>
        <Container navToggle={navToggle}>
          <Nav>
            <LogoContainer>
              <Link to="/">
                <img src={Logo} alt="Estate IQ Logo" />
              </Link>
            </LogoContainer>
            <LargeDevice>
              {Navigate.map((Links, i) => (
                <NavLink key={i} to={`${Links.route}`}>
                  {Links.name}
                </NavLink>
              ))}
              <img src={Search} alt="search" />
            </LargeDevice>
            <SmallDevice>
              {navToggle && (
                <>
                  {Navigate.map((Links, i) => (
                    <NavLink
                      key={i}
                      to={`${Links.route}`}
                      onClick={() => {
                        CloseNav();
                      }}
                    >
                      {Links.name}
                    </NavLink>
                  ))}
                  <SearchContainer>
                    <img src={Search} alt="search" />
                  </SearchContainer>
                </>
              )}
            </SmallDevice>
          </Nav>
          <Icons>
            <button onClick={ToggleNav}>
              {navToggle ? (
                <img src={close} alt="Estate IQ close" />
              ) : (
                <img src={burger} alt="Estate IQ hamburger" />
              )}
            </button>
          </Icons>
        </Container>
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  z-index: 100;
  @media (max-width: 1100px) {
    box-shadow: none;
  }
`;
const Container = styled.div`
  position: relative;
  @media (min-width: 1366px) {
    width: 1280px;
    margin: auto;
  }
  @media (max-width: 1366px) {
    width: 1024px;
    margin: auto;
  }
  @media (max-width: 1100px) {
    height: ${(props) => (props.navToggle ? "100vh" : "40px")};
    width: 100%;
    padding-bottom: ${(props) => (props.navToggle ? "0px" : "20px")};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.05);
    z-index: 4;
  }
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 88px;
  @media (min-width: 1366.1px) {
    width: 1280px;
    margin: auto;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    margin-left: 0px;
    margin-right: 0px;
    height: 0px;
    z-index: 1;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
const SearchContainer = styled.div`
  text-align: right;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
`;
const LogoContainer = styled.div`
  img {
    width: 159px;
    height: 48px;
  }
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    text-align: left;
    width: 100%;
    margin-right: 0px;
    padding-top: 20px;

    img {
      width: 90px;
      height: 24px;
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;
const LargeDevice = styled.div`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
    margin-left: auto;
    gap: 80px;
  }
`;
const SmallDevice = styled.div`
  width: 100%;

  @media (min-width: 1100px) {
    display: none;
    margin-left: auto;
  }
`;
const NavLink = styled(Link)`
  font-weight: 400;
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  color: var(--mainBlack);
  border: transparent;
  background-color: transparent;
  outline: 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  text-decoration: none;
  img {
    padding-left: 2px;
  }
  :hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    width: 100%;
    text-align: left;
    jutify-content: left;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 35px;
    padding-bottom: 5px;
    border: 1px solid #f6f6f6;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const Icons = styled.div`
  @media (min-width: 1100px) {
    display: none;
  }
  button {
    background-color: transparent;
    outline: 0;
    border: transparent;
    position: absolute;
    top: 20px;
    z-index: 50;
    right: 16px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
