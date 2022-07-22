import React from 'react'
import {
  TopNavBackground,
  TopNavTitle,
  TitleContainer,
} from "../../styles/topnav.css";

const TopNav = () => {
  return (
    <TopNavBackground>
      <TitleContainer>
        <TopNavTitle>
          HIGHTABLE NOTICE: Learn more about protecting yourselves against
          Covid-19
        </TopNavTitle>
      </TitleContainer>
    </TopNavBackground>
  );
}

export default TopNav;
