import styled from "styled-components";
import { media } from "../styles/theme";

export const Main = styled.main`
  width: 100%;
`;

export const Section = styled.section`
  width: 90%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: ${props => props.isEqual ? "30% 40%" : "30% 70%"};
  margin-top: 30px;
  justify-content: space-between;

${media.mobile}{
  width: 85%;
    grid-template-columns: 100%;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const HeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

${media.mobile}{
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroDescription = styled.span`
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.theme.xl};
  font-weight: 400;
  color: #4A4A52;
  line-height: 151.9%;
  letter-spacing: 0.125em;
  font-style: normal;
  margin-bottom: 30px;

  ${media.mediumScreenLaptop}{
    font-size: ${props => props.theme.lg};
    line-height: 140%;
  }

  ${media.smallScreenLaptop}{
    font-size: ${props => props.theme.md};
    line-height: 130%;
  }

  ${media.tablet}{
    font-size: ${props => props.theme.xs};
    line-height: 120%;
  }

  ${media.mobile}{
    display: none;
  }
`;

export const HeroDescriptionMobile = styled.span`
  display: none;

  ${media.mobile}{
    display: block;
    font-family: ${props => props.theme.primaryFont};
    font-size: ${props => props.theme.lg};
    font-weight: 400;
    color: #4A4A52;
    line-height: 120%;
    letter-spacing: 0.125em;
    font-style: normal;
    margin-bottom: 30px;
    margin-top: 10px;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  color: ${props => props.primary ? props.theme.primaryColor : "#242424"};
  font-size: ${props => props.secondary ? "40px" : "60px"};
  margin-top: 0px;
  margin-bottom: 0.2em;
  font-family: ${props => props.theme.primaryFont};
  font-style: normal;
  font-weight: 700;
  line-height: ${props => props.secondary ? "149%" : "120%"};

  ${media.mediumScreenLaptop}{
    font-size: 45px;
  }

  ${media.smallScreenLaptop}{
    font-size: 40px;
  }

  ${media.tablet}{
    font-size: ${props => props.theme.xxl};
  }

  ${media.tablet}{
    font-size: ${props => props.theme.xxl};
  }
`;

export const SignupBtn = styled.button`
  color: ${props => props.primary ? props.theme.secondaryColor : "white"};
  font-weight: 500;
  font-size: ${props => props.theme.lg};
  padding: 18px 20px;
  border-radius: 10px;
  background-color: ${props => props.primary ? "transparent" : props.theme.primaryColor};
  outline: none;
  border: 2px solid ${props => props.primary ? props.theme.secondaryColor : props.theme.primaryColor};
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mediumScreenLaptop}{
    font-size: ${props => props.theme.md};
    padding: 18px 12px;
  }

  ${media.smallScreenLaptop}{
    font-size: ${props => props.theme.sm};
    padding: 18px 12px;
  }

  ${media.tablet}{
    font-size: ${props => props.theme.sm};
    padding: 12px 8px;
    width: 60%;
  }

  ${media.tablet}{
    font-size: ${props => props.theme.sm};
    padding: 12px 8px;
    width: 50%;
    margin: 0 auto;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroImageContainer = styled.div`
  width: 100%;
  height: 100%;

  span {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;

    img {
      width: 100% !important;
      height: 100% !important;
    }
  }

  ${media.mobile}{
    display: none;
  }
`;

export const SubContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 5rem; */
`;

export const CardSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: ${props => props.isPushedDown ? "30rem" : "10rem"};
  margin-bottom: ${props => props.isPushedDown ? "0px" : "20rem"}; */
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  margin-top: ${props => props.space ? "50px" : "0px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 20px;
  justify-content: center;
  background: ${props => props.selected ? props.theme.secondaryOrange : "white"};
  box-shadow: ${props => props.theme.primaryBoxShadow};
`;

export const CardTitle = styled.h3`
  color: ${props => props.selected ? "white" : props.theme.lightGrey};
  font-family: ${props => props.theme.primaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: ${props => props.theme.xxl};
  line-height: 40px;
`;

export const CardDetails = styled.div`
  font-family: ${props => props.theme.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: ${props => props.theme.xl};
  color: ${props => props.selected ? "white" : "#4A4A52"};
  text-align: center;
`;
