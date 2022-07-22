import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  NavbarContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  LeftContainer,
  RightContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavBtn,
  NavLink,
  OpenLinksButton,
  NavbarLinkExtended,
  NavLinkExtended,
} from "../../styles/mainNavbar.css";

const MainNavbar = () => {
  const [extendedNavbar, setExtendedNavbar] = useState(false);
  const router = useRouter();
  return (
    <NavbarContainer extendedNavbar={extendedNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Image src="/image/logo.svg" alt="logo" width="256" height="150" />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink href="/" passHref>
              <NavLink active={router.pathname === "/"}>Home</NavLink>
            </NavbarLink>
            <NavbarLink href="/about" passHref>
              <NavLink active={router.pathname === "/about"}>About</NavLink>
            </NavbarLink>
            <NavbarLink href="/business" passHref>
              <NavLink active={router.pathname === "/business"}>
                Business
              </NavLink>
            </NavbarLink>
            <NavbarLink href="/consumer" passHref>
              <NavLink active={router.pathname === "/consumer"}>
                Consumer
              </NavLink>
            </NavbarLink>
            <NavbarLink href="/blog" passHref>
              <NavLink active={router.pathname === "/blog"}>Blog</NavLink>
            </NavbarLink>
            <NavbarLink href="/career" passHref>
              <NavLink active={router.pathname === "/career"}>Careers</NavLink>
            </NavbarLink>
            <NavBtn primary>Join HighTable</NavBtn>
            {/* <NavBtn>Login</NavBtn> */}
            <OpenLinksButton onClick={() => setExtendedNavbar((curr) => !curr)}>
              {extendedNavbar ? (
                <Image
                  src="/image/icon-x.svg"
                  alt="cancel-menu"
                  width="110"
                  height="60"
                />
              ) : (
                <Image
                  src="/image/hamburger.svg"
                  alt="menu"
                  width="90"
                  height="50"
                />
              )}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendedNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended href="/" passHref>
            <NavLinkExtended active={router.pathname === "/"}>
              Home
            </NavLinkExtended>
          </NavbarLinkExtended>
          <NavbarLinkExtended href="/about" passHref>
            <NavLinkExtended active={router.pathname === "/about"}>
              About
            </NavLinkExtended>
          </NavbarLinkExtended>
          <NavbarLinkExtended href="/business" passHref>
            <NavLinkExtended active={router.pathname === "/business"}>
              Business
            </NavLinkExtended>
          </NavbarLinkExtended>
          <NavbarLinkExtended href="/consumer" passHref>
            <NavLinkExtended active={router.pathname === "/consumer"}>
              Consumer
            </NavLinkExtended>
          </NavbarLinkExtended>
          <NavbarLinkExtended href="/blog" passHref>
            <NavLinkExtended active={router.pathname === "/blog"}>
              Blog
            </NavLinkExtended>
          </NavbarLinkExtended>
          <NavbarLinkExtended href="/career" passHref>
            <NavLinkExtended active={router.pathname === "/career"}>
              Careers
            </NavLinkExtended>
          </NavbarLinkExtended>
          {/* <NavBtn primary>Join HighTable</NavBtn> */}
          {/* <NavBtn>Login</NavBtn> */}
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default MainNavbar;
