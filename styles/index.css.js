import styled from "styled-components";
import Link from "next/link";
import { media } from "../styles/theme";

export const Main = styled.main`
  width: 100%;
`;

export const Section = styled.section`
  width: ${props => props.width || "90%"};
  margin-inline: auto;
  display: grid;
  grid-template-columns: ${props => props.column};
  margin-bottom: ${props => props.marginBottom?.d || "0px"};
  margin-top: 30px;
  justify-content: space-between;
  overflow: hidden;

${media.mobile}{
    width: 85%;
    grid-template-columns: 100%;
    margin-top: 3rem;
    margin-bottom: ${props => props.marginBottom?.m || "0px"};
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

  ${media.mobile}{
    font-size: ${props => props.theme.xxl};
    text-align: center;
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

  ${media.mobile}{
    font-size: ${props => props.theme.xl};
    text-align: center;
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

  ${media.mobile}{
    font-size: ${props => props.theme.xs};
    padding: 12px 8px;
    width: 50%;
    margin: 0 auto;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    justify-content: center;
    align-items: center;
  }
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

  ${media.mobile}{
    align-items: center;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${media.mobile}{
    flex-direction: column;
    margin-top: 4rem;
  }
`;

export const CardSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${media.mobile}{
    justify-content: center;
    margin-bottom: 2rem;
  }
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

  ${media.mobile}{
    width: 90%;
  }
`;

export const CardEmpty = styled.div`
  width: 300px;
  height: 150px;
  border: none;
  outline: none;
  background: transparent;

  ${media.mobile}{
    display: none;
  }
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

  ${media.mobile}{
    margin-top: 5rem;
    padding-block: 2rem;
  }
`;

export const AboutTitle = styled.h3`
  font-family: ${props => props.theme.primaryFont};
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #212121;

  ${media.mobile}{
    font-size: 26px;
    line-height: 30px;
  }
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

  ${media.mobile}{
    font-size: 22px;
    line-height: 26px;
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

  ${media.mobile}{
    font-size: 18px;
    line-height: 135%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${props => props.center ? "center" : "flex-start"};

  ${media.mobile} {
    margin-bottom: ${props => props.marginBottom?.m || "0rem"};
  }
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

  ${media.mobile}{
    margin-top: 2rem;
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

  ${media.mobile}{
    grid-template-columns: 100%;
  }
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

  ${media.mobile}{
    border-left: none;
    padding-left: 0px;

    h4 {
      font-size: 22px;
    line-height: 30px;
    }
  }

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

  ${media.mobile}{
    flex-direction: column;
  }
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

  ${media.mobile}{
    width: 100%;
    height: auto;
  }
`;

export const IconContainer = styled.div`
  flex: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

${media.mobile} {
  flex: 8%;
  margin-top: 6px;
}
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

  ${media.mobile}{
    flex: 92%;
    margin-left: 10px;

    h4 {
      font-size: 20px;
    line-height: 30px;
    }

    p {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const BusinessSection = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 10rem;

  ${media.mobile} {
    margin-top: 4rem;
  }
`;

export const BusinessCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 5rem;

  ${media.mobile} {
    flex-direction: column;
    margin-top: 2rem;
    height: auto;
  }
`;

export const BusinessCards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 62px 62px 40px 40px;
  border-inline: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  width: 24%;
  height: max-content;

  span {
    width: 100% !important;
    height: 252px !important;
  }

  img {
    width: 100% !important;
    height: 252px !important;
  }

  ${media.mobile} {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
    flex-direction: column;
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

  ${media.mobile} {
    padding: 10px;
    
    h4 {
      font-size: 20px;
      line-height: 24px;
    }

    p {
      font-size: 18px;
      line-height: 26px;
    }
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

  ${media.mobile} {
    button {
      font-size: 22px;
      line-height: 90%;
    }
  }
`;

export const TestimonyCardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 90%;
  margin-inline: auto;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }

  ${media.mobile} {
    width: 100%;
  }
`;

export const TestimonyCard = styled.div`
  width: 600px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-start;
  height: max-content;
  background: #FFFBF7;
  border: 2px solid #E6E6E3;
  border-radius: 30px;
  padding: 30px;
  margin: 30px;
  background-image: url("/image/qoutient.svg");
  background-repeat: no-repeat;
  background-position: 15% 10%; 

  ${media.mobile} {
    width: 250px;
    margin: 20px;
    padding: 20px;
  }
`;

export const TestimonyDetails = styled.span`
  width: 100%;
  
  p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: rgba(102, 102, 112, 0.92);
  }

  ${media.mobile} {
    p {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const TestimonyUserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  h5 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    color: #2D2D30;
    margin-left: 15px;
  }

  ${media.mobile} {
    h5 {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const TestimonyUserImage = styled.div`
  width: 20%;
  height: 50%;
  border-radius: 100%;

  span {
    width: 85% !important;
    height: 85% !important;
    object-fit: cover;

    img {
      width: 85% !important;
      height: 85% !important;
    }
  }
`;

export const TestimonySection = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 6rem;
  margin-top: 30px;
  flex-direction: column;
  justify-content: space-between;

${media.mobile}{
  width: 100%;
  }
`;

export const ContactUsSection = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  margin-bottom: 7rem;
  margin-top: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 100%;
    color: #000000;
    margin-bottom: 0.2em;
  }

  h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 168.9%;
    text-align: center;
    color: #000000;
    width: 35%;
  }

${media.mobile}{
  width: 100%;
  text-align: center;

  h3 {
    font-size: 30px;
    line-height: 80%;
  }

  h4 {
    font-size: 20px;
    line-height: 140%;
    width: 90%;
    margin: 20px auto;
  }
  }
`;

export const ContactContainer = styled.form`
  display: flex;
  width: 45%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  input {
    width: 50%;
    height: 75px;
    border: 2px solid #ADADAD;
    border-radius: 12px;
    padding-left: 30px;
    padding-block: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #AFAFAF;
  }

  ${media.mobile} {
    flex-direction: column;
    justify-content: center;
    width: 80%;

    input {
      width: 80%;
      font-size: 16px;
      line-height: 30%;
      padding-left: 10px;
      padding-block: 5px;
      margin-bottom: 20px;
      height: 50px;
    }
  }
`;


export const SubscribeBtn = styled.button`
  color: ${props => props.primary ? props.theme.secondaryColor : "white"};
  font-weight: 500;
  font-size: ${props => props.theme.lg};
  padding: 18px 20px;
  border-radius: 10px;
  background-color: ${props => props.primary ? "transparent" : "#FF9916"};
  outline: none;
  border: 2px solid ${props => props.primary ? props.theme.secondaryColor : props.theme.primaryColor};
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 100%;
  color: #FFFFFF;

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

  ${media.mobile}{
    font-size: ${props => props.theme.sm};
    padding: 12px 8px;
    width: 80%;
    height: 50px;
    margin: 0 auto;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  height: max-content;
  margin: 0 auto;

  ${media.mobile} {
    flex-direction: column;
    height: auto;
  }
`;

export const FoterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 40%;

  ${media.mobile} {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const FoterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h5 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #FFF4E7;
    margin-bottom: 0.7em;
  }

  ${media.mobile} {
    h5 {
      font-size: 16px;
    }
  }
`;

export const Links = styled(Link)``;
export const FooterLink = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.03em;
  color: rgba(255, 244, 231, 0.7);
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};

  span {
    width: 100% !important;
    height: 100% !important;

    img {
      width: 100% !important;
    height: 100% !important;
    }
  }

  ${media.mobile} {
    font-size: 14px;
    width: ${props => props.blackLogo ? "55%" : "auto"};
    height: ${props => props.blackLogo ? "55%" : "auto"};
  }
`;

export const SelectConatiner = styled.div`
  width: 45%;
  height: 40px;
  display: grid;
  grid-template-areas: "select";
  border: 1px solid #FFF4E7;
  border-radius: 5px;
  padding: 0.5em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #000;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.03em;
  color: #FFF4E7;

  ${media.mobile} {
    width: 48%;
  }

  &::after {
  content: "";
  width: 0.8em;
  height: 0.5em;
  background-color: #FFF4E7;
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  grid-area: select;
  justify-self: end;
}

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
    grid-area: select;
    background-color: #000;
    color: #FFF4E7;
  }

select::-ms-expand {
  display: none;
}
`;

export const FoterSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 30%;
  height: max-content;
  margin-top: 1.67em;

  ${media.mobile} {
    width: 100%;
  }
`;

export const SelectButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: max-content;

  ${media.mobile} {
    width: 100%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 20px auto;
`;

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  height: max-content;
  margin: 0 auto;

  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.03em;
    color: #FFF4E7;
    margin: 0em;
  }

  ${media.mobile} {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;


