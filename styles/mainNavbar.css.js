import styled from "styled-components";
import Link from "next/link";
import { media } from "../styles/theme";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: ${props => props.fixed ? "fixed" : "static"};
  z-index: 2;
  top: ${props => props.fixed ? 0 : "auto"};
  left: ${props => props.fixed ? 0 : "auto"};
  box-shadow: ${props => props.fixed ? props.theme?.primaryBoxShadow : "none"};
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 80px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const NavbarLink = styled(Link)`
  ${media.tablet}{
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${props => props.active ? "#0C1F3F" : "#595855"};
  font-size: x-large;
  font-family: ${props => props.theme.primaryFont};
  text-decoration: none;
  margin-right: 20px;

  ${media.tablet}{
    display: none;
  }
`;

export const NavBtn = styled.button`
  font-size: x-large;
  font-family: ${props => props.theme.primaryFont};
  border-radius: ${props => props.primary ? "20px" : "5px"};
  border: 2px solid ${props => props.theme.primaryColor};
  background-color: ${props => props.primary ? props.theme.primaryColor : "transparent"};
  color: ${props => props.primary ? "white" : props.theme.primaryColor};
  padding: 0.25em 1em;
  margin-right: 20px;

    ${media.tablet}{
      font-size: large;
      padding: 0em 0em;
      border-radius: 0px;
      border: none;
      background-color: transparent;
      color: ${props => props.theme.primaryColor};
    }
`;

// mobile css
export const NavbarLinkExtended = styled(Link)`
  span {
    width: 100%;
  }
`;

export const NavLinkExtended = styled.a`
  color: ${props => props.active ? "#FF9916" : "#595855"};
  background-color: ${props => props.active ? "#FFE3BD" : "transparent"};
  font-size: x-large;
  font-family: ${props => props.theme.primaryFont};
  text-decoration: none;
  margin-bottom: 30px;
  width: 100%;
  padding-block: 20px;

  &:hover {
    background-color: #FFE3BD;
    color: #FF9916;
  }
`;

export const OpenLinksButton = styled.button`
  width: 90px;
  height: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  color: black;
  cursor: pointer;
  display: none;

  ${media.tablet}{
    display: flex;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFAF3;
  height: 100vh;
  position: fixed;
  text-align: center;
  padding-top: 30px;
  inset: ${props => props.fixed ? "13% 0 0 40%" : "20% 0 0 40%"};
`;
