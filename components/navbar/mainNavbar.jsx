import React, { useState, useEffect } from "react";
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
  const homeHref = "/";
  const aboutHref = "#about";
  const businessHref = "#business";
  const consumerHref = "#consumer";
  const blogHref = "#blog";
  const careerHref = "#career";

const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // just trigger this so that the initial state
  // is updated as soon as the component is mounted
  // related: https://stackoverflow.com/a/63408216
  handleScroll();

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <NavbarContainer extendedNavbar={extendedNavbar} fixed={scrollY > 100}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Image src="/image/logo.svg" alt="logo" width="256" height="150" />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink href={homeHref} passHref>
              <NavLink active={router.pathname === homeHref}>Home</NavLink>
            </NavbarLink>
            <NavbarLink href={aboutHref} passHref>
              <NavLink active={router.pathname === aboutHref}>About</NavLink>
            </NavbarLink>
            <NavbarLink href={businessHref} passHref>
              <NavLink active={router.pathname === businessHref}>
                Business
              </NavLink>
            </NavbarLink>
            <NavbarLink href={consumerHref} passHref>
              <NavLink active={router.pathname === consumerHref}>
                Consumer
              </NavLink>
            </NavbarLink>
            <NavbarLink href={blogHref} passHref>
              <NavLink active={router.pathname === blogHref}>Blog</NavLink>
            </NavbarLink>
            <NavbarLink href={careerHref} passHref>
              <NavLink active={router.pathname === careerHref}>Careers</NavLink>
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
        <NavbarExtendedContainer fixed={scrollY > 100}>
          <NavbarLinkExtended href={homeHref} passHref>
            <NavLinkExtended active={router.pathname === homeHref}>
              Home
            </NavLinkExtended>
          </NavbarLinkExtended>
          <NavbarLinkExtended href={aboutHref} passHref>
            <NavLinkExtended active={router.pathname === aboutHref}>
              About
            </NavLinkExtended>
          </NavbarLinkExtended>
          <NavbarLinkExtended href={businessHref} passHref>
            <NavLinkExtended active={router.pathname === businessHref}>
              Business
            </NavLinkExtended>
          </NavbarLinkExtended>
          <NavbarLinkExtended href={consumerHref} passHref>
            <NavLinkExtended active={router.pathname === consumerHref}>
              Consumer
            </NavLinkExtended>
          </NavbarLinkExtended>
          <NavbarLinkExtended href={blogHref} passHref>
            <NavLinkExtended active={router.pathname === blogHref}>
              Blog
            </NavLinkExtended>
          </NavbarLinkExtended>
          <NavbarLinkExtended href={careerHref} passHref>
            <NavLinkExtended active={router.pathname === careerHref}>
              Careers
            </NavLinkExtended>
          </NavbarLinkExtended>
          {/* <NavBtn primary>Join HighTable</NavBtn> */}
          {/* <NavBtn>Login</NavBtn> */}
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};;

export default MainNavbar;
