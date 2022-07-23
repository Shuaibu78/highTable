import styled from "styled-components";
import { media } from "../styles/theme";

export const Main = styled.main`
  width: 100%;
`;

export const Section = styled.section`
  width: 90%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: ${props => props.column};
  margin-bottom: ${props => props.marginBottom || "0px"};
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
  margin-top: ${props => props.secondary ? "5rem" : "0px"};
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

export const TestimonyTitleWrapper = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
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
  font-size: ${props => props.secondary ? "36px" : "60px"};
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

export const TestimonyTiltle = styled.h4`
  color: ${props => props.primary ? props.theme.primaryColor : "#242424"};
  font-size: ${props => props.secondary ? "24px" : "30px"};
  margin-top: 0px;
  margin-bottom: 0.2em;
  font-family: ${props => props.theme.primaryFont};
  font-style: normal;
  font-weight: 700;
  line-height: ${props => props.secondary ? "30px" : "37px"};

  ${media.mediumScreenLaptop}{
    font-size: ${props => props.secondary ? "20px" : "26px"};
  }

  ${media.smallScreenLaptop}{
    font-size: ${props => props.secondary ? "18px" : "24px"};
  }

  ${media.tablet}{
    font-size: ${props => props.secondary ? "16px" : "20px"};
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

export const CardEmpty = styled.div`
  width: 300px;
  height: 150px;
  border: none;
  outline: none;
  background: transparent;
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

export const AboutSectrion = styled.section`
  margin-top: 12rem;
  width: 100%;
  background-color: #FFD59F;
  padding-block: 3rem;
`;

export const AboutTitle = styled.h3`
  font-family: ${props => props.theme.primaryFont};
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #212121;
`;

export const ContentTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const VerticalLine = styled.div`
  border-left: 3px solid ${props => props.primaryColor ? props.theme.primaryColor : "#212121"};
  height: auto;

  h4 {
    font-family: ${props => props.theme.primaryFont};
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    margin: 0px;
    color: ${props => props.primaryColor ? props.theme.primaryColor : "#212121"};
    padding-left: 20px;
  }
`;

export const ContentDetails = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: .5rem;
`;

export const Paragraph = styled.p`
  font-family: ${props => props.theme.primaryFont};
  font-style: normal;
  font-weight: ${props => props.whiteBg ? 300 : 500};
  font-size: 22px;
  line-height: 151.4%;
  color: ${props => props.whiteBg ? "#000000" : "#212121"};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${props => props.center ? "center" : "flex-start"};
`;

export const ImageWrapper = styled.div`
display: flex;
align-items: flex-start;
  width: 100%;

  span {
    width: 100% !important;
    height: auto !important;

    img {
      width: 100% !important;
    height: auto !important;
    }
  }
`;

export const ImageWrapperForOffer = styled.div`
display: flex;
align-items: flex-start;
  width: 100%;

  span {
    width: 100% !important;
    height: auto !important;

    img {
      width: 100% !important;
      height: auto !important;
      object-fit: cover;

    }
  }
`;

export const ValuesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: flex-start;
  margin-top: 2rem;
  align-content: center;
  column-gap: 20px;
  row-gap: 20px;
  margin-inline: auto;
`;

export const ValuesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
`;

export const ValueCard = styled.div`
  border-left: ${props => props.leftBorder ? "3px solid #FFF7E7" : "none"};
  padding-left: ${props => props.leftBorder ? "20px" : "0px"};

  h4 {
    font-family: ${props => props.theme.primaryFont};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin: 0px;
    color: #212121;
  }
`;

export const ReasonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-top: 3rem;
`;

export const ReasonCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  background: #FFFFFF;
  box-shadow: 1.46958e-15px 16px 47px rgba(85, 61, 0, 0.12);
  border-radius: 31px;
  width: 35%;
  height: 277px;
  margin-bottom: 30px;
`;

export const IconContainer = styled.div`
  flex: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const ReasonDetails = styled.div`
  flex: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 10px;

  h4 {
    color: #414148;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    margin-block: 0px;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    color: #4A4A52;
    text-align: left;
    width: 90%;
  }
`;

export const BusinessSection = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 10rem;
`;

export const BusinessCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 5rem;
`;

export const BusinessCards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 62px 62px 40px 40px;
  border: 1px solid #E5E5E5;
  width: 24%;

  span {
    width: 100% !important;
    height: 252px !important;
  }

  img {
    width: 100% !important;
    height: 252px !important;
  }
`;

export const BusinessDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #08101E;
    margin-block: 0.2em;
  }

  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 33px;
    color: rgba(0, 0, 0, 0.76);
    margin-bottom: 0px;
  }
`;

export const BusinessBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  padding-right: 20px;

  button {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    color: #FF9916;
    outline: none;
    background-color: transparent;
    border: none;
  }
`;
