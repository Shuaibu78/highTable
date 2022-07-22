import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import {
  Section,
  Main,
  HeroImageContainer,
  HeroTextContainer,
  HeroTextWrapper,
  HeroTitleWrapper,
  HeroTitle,
  HeroDescription,
  SignupBtn,
  HeroDescriptionMobile,
  CardsContainer,
  CardSection,
  Card,
  CardTitle,
  CardDetails,
  SubContentContainer,
} from "../styles/index.css";

export default function Home() {
  return (
    <Layout>
      <Main>
        <Section>
          <HeroTextContainer>
            <HeroTextWrapper>
              <HeroTitleWrapper>
                <HeroTitle>Be on the </HeroTitle>
                &nbsp;
                <HeroTitle primary>HighTable!</HeroTitle>
              </HeroTitleWrapper>
              <HeroDescription>
                Connect to the best hospitality and entertainment experience in
                Africa.
              </HeroDescription>
              <HeroDescriptionMobile>
                We exist to connect people to quality hospitality businesses and
                entertainment experiences in Africa. This platform enables
                businesses and customers engage and transact.
              </HeroDescriptionMobile>
              <SignupBtn>SIGN UP NOW</SignupBtn>
            </HeroTextWrapper>
          </HeroTextContainer>
          <HeroImageContainer>
            <Image src="/image/happy.svg" alt="logo" width="256" height="150" />
          </HeroImageContainer>
        </Section>
        <Section isEqual>
          <SubContentContainer>
            <HeroTextContainer>
              <HeroTextWrapper>
                <HeroTitle secondary>
                  We connect businesses to a wide range of customers
                </HeroTitle>
                <HeroDescription>
                  Take your manual operations digital and find ideal customers
                  easily.
                </HeroDescription>
                <SignupBtn primary>
                  Register&nbsp;&nbsp;
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0476 8.53766L9.27471 2.76473L11.7509 0.288574L21.7509 10.2886L11.7509 20.2886L9.27471 17.8124L15.0477 12.0395H0V8.53766H15.0476Z"
                      fill="#0F264C"
                    />
                  </svg>
                </SignupBtn>
              </HeroTextWrapper>
            </HeroTextContainer>
            <HeroTextContainer>
              <HeroTextWrapper>
                <HeroTitle secondary>
                  We show customers the quality experience they deserve
                </HeroTitle>
                <HeroDescription>
                  Explore great location options for your next outing experience through our AI powered recommendation feature and reviews from other users.
                </HeroDescription>
                <SignupBtn primary>
                  Be a part&nbsp;&nbsp;
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0476 8.53766L9.27471 2.76473L11.7509 0.288574L21.7509 10.2886L11.7509 20.2886L9.27471 17.8124L15.0477 12.0395H0V8.53766H15.0476Z"
                      fill="#0F264C"
                    />
                  </svg>
                </SignupBtn>
              </HeroTextWrapper>
            </HeroTextContainer>
          </SubContentContainer>
          <CardsContainer>
            <CardSection>
              <Card selected>
                <Image src="/image/connect.svg" alt="logo" width="50" height="50" />
                <CardTitle selected>Be Connected</CardTitle>
                <CardDetails selected>Let’s connect you to locations you will love, like restaurants, spas, hotels and so much more.</CardDetails>
              </Card>
              <Card space>
                <Image src="/image/connect.svg" alt="logo" width="256" height="150" />
                <CardTitle>Be Connected</CardTitle>
                <CardDetails>Let’s connect you to locations you will love, like restaurants, spas, hotels and so much more.</CardDetails>
              </Card>
            </CardSection>
            <CardSection isPushedDown>
              <Card>
                <Image src="/image/connect.svg" alt="logo" width="256" height="150" />
                <CardTitle>Be Connected</CardTitle>
                <CardDetails>Let’s connect you to locations you will love, like restaurants, spas, hotels and so much more.</CardDetails>
              </Card>
              <Card space>
                <Image src="/image/connect.svg" alt="logo" width="256" height="150" />
                <CardTitle>Be Connected</CardTitle>
                <CardDetails>Let’s connect you to locations you will love, like restaurants, spas, hotels and so much more.</CardDetails>
              </Card>
            </CardSection>
          </CardsContainer>
        </Section>
      </Main>
    </Layout>
  );
}
