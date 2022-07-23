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
  CardEmpty,
  AboutSectrion,
  AboutTitle,
  ContentTile,
  VerticalLine,
  ContentDetails,
  Paragraph,
  ContentContainer,
  ImageWrapper,
  ValuesContainer,
  ValueCard,
  ValuesWrapper,
  ReasonCard,
  IconContainer,
  ReasonDetails,
  ReasonContainer,
  BusinessSection,
  BusinessCardsContainer,
  BusinessCards,
  BusinessDetails,
  BusinessBtnContainer,
  ImageWrapperForOffer,
  TestimonyTitleWrapper,
  TestimonyTiltle,
} from "../styles/index.css";

export default function Home() {
  return (
    <Layout>
      <Main>
        <Section column="30% 70%">
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
        <Section column="30% 50%">
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
            <HeroTextContainer secondary>
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
                <Image src="/image/informed.svg" alt="logo" width="50" height="50" />
                <CardTitle>Be Informed</CardTitle>
                <CardDetails>Know about events happening around you with HighTable and book reservations.</CardDetails>
              </Card>
              <CardEmpty></CardEmpty>
            </CardSection>
            <CardSection isPushedDown>
              <CardEmpty></CardEmpty>
              <Card>
                <Image src="/image/owner.svg" alt="logo" width="50" height="50" />
                <CardTitle>Business Owner?</CardTitle>
                <CardDetails>Do you own a restaurant, spa or hotel?, HighTable Business will help you expand your customer base.</CardDetails>
              </Card>
              <Card space>
                <Image src="/image/pin.svg" alt="logo" width="50" height="50" />
                <CardTitle>New to Africa?</CardTitle>
                <CardDetails>HighTable will help you navigate and select places of interest you would love to explore.</CardDetails>
              </Card>
            </CardSection>
          </CardsContainer>
        </Section>
        <AboutSectrion>
          <AboutTitle>
            About HighTable Africa
          </AboutTitle>
          <Section column="100%" marginBottom="6rem">
            <ContentTile>
              <VerticalLine><h4>Who We Are</h4></VerticalLine>
            </ContentTile>
            <ContentDetails>
              <Paragraph>At HighTable, we’re committed to bridging the gap between consumers and hospitality businesses across Africa.
                We’re combining the warm and personal aspects of community engagement with the convenience and scalability of tech to
                create an ecosystem that produces and sustains high-value solutions catered towards moving the hospitality, entertainment and tourism industries forward. HighTable makes you explore great location options for your
                next outing experience through other peoples real experience and
                reviews on the app.
              </Paragraph>
              <Paragraph>
                Whether you’re looking for new dining experiences, attractions, nightlife, activities,
                adventures, lodging, or people to connect with, your journey starts here.
                If you also own a business, HighTable Business helps you reach a larger amount of audience in an easier way, enabling you to grow. </Paragraph>
            </ContentDetails>
          </Section>
          <Section column="40% 40%" marginBottom="6rem">
            <ContentContainer center>
              <ContentTile>
                <VerticalLine><h4>Our Vision</h4></VerticalLine>
              </ContentTile>
              <ContentDetails>
                <Paragraph>
                  We are creating a HighTable that will serve as the leading platform using tech solutions to connect consumers and businesses in Africa. We aim to nurture organic and fruitful relationships between consumers, business owners and their communities.
                </Paragraph>
              </ContentDetails>
            </ContentContainer>
            <ContentContainer>
              <ImageWrapper><Image src="/image/vision.svg" alt="logo" layout="responsive" width="100" height="70" /></ImageWrapper>
            </ContentContainer>
          </Section>
          <Section column="40% 40%" marginBottom="6rem">
            <ContentContainer>
              <ImageWrapper><Image src="/image/mission.svg" alt="logo" layout="responsive" width="100" height="70" sizes="100vw" /></ImageWrapper>
            </ContentContainer>
            <ContentContainer center>
              <ContentTile>
                <VerticalLine><h4>Our Vision</h4></VerticalLine>
              </ContentTile>
              <ContentDetails>
                <Paragraph>
                  We are creating a HighTable that will serve as the leading platform using tech solutions to connect consumers and businesses in Africa. We aim to nurture organic and fruitful relationships between consumers, business owners and their communities.
                </Paragraph>
              </ContentDetails>
            </ContentContainer>
          </Section>
          {/* need fix */}
          <Section column="100%" marginBottom="6rem">
            <ContentTile>
              <VerticalLine><h4>Our Values</h4></VerticalLine>
            </ContentTile>
            <ValuesContainer>
              <ValueCard>
                <h4>Collaboration</h4>
                <ContentDetails>
                  <Paragraph>
                    Together, we go further. Our collective talent, creativity and experiences enable us achieve greatly.
                  </Paragraph>
                </ContentDetails>
              </ValueCard>
              <ValueCard leftBorder>
                <h4>Passion</h4>
                <ContentDetails>
                  <Paragraph>
                    The passion for the solutions we build and the communities we serve inspires new ideas and perpetuates excellence.
                  </Paragraph>
                </ContentDetails>
              </ValueCard>
              <ValueCard leftBorder>
                <h4>Integrity</h4>
                <ContentDetails>
                  <Paragraph>
                    Integrity is the backbone of trust therefore, we practice honesty, transparency, and fairness daily.
                  </Paragraph>
                </ContentDetails>
              </ValueCard>
              <ValueCard leftBorder>
                <h4>Innovation</h4>
                <ContentDetails>
                  <Paragraph>
                    Fueled by our passion, we actively seek new and better solutions that exceed expectations and deliver value.
                  </Paragraph>
                </ContentDetails>
              </ValueCard>
              <ValueCard leftBorder>
                <h4>Impact</h4>
                <ContentDetails>
                  <Paragraph>
                    We strive to effect positive change and experiences for our colleagues, customers, and community.
                  </Paragraph>
                </ContentDetails>
              </ValueCard>
            </ValuesContainer>
          </Section>
          <Section column="100%" marginBottom="3rem">
            <ContentTile>
              <VerticalLine><h4>Why Choose Us</h4></VerticalLine>
            </ContentTile>
            <ReasonContainer>
              <ReasonCard>
                <IconContainer>
                  <Image src="/image/check.svg" alt="logo" width="50" height="50" />
                </IconContainer>
                <ReasonDetails>
                  <h4>Easy To Use</h4>
                  <p>Our platform offers you the opportunity to discover a variety of businesses across Africa.</p>
                </ReasonDetails>
              </ReasonCard>
              <ReasonCard>
                <IconContainer>
                  <Image src="/image/star.svg" alt="logo" width="50" height="50" />
                </IconContainer>
                <ReasonDetails>
                  <h4>5 Star Satisfaction</h4>
                  <p>We have powerful solutions in simple designs. Perform various functions and transactions in just a few clicks.</p>
                </ReasonDetails>
              </ReasonCard>
              <ReasonCard>
                <IconContainer>
                  <Image src="/image/support.svg" alt="logo" width="50" height="50" />
                </IconContainer>
                <ReasonDetails>
                  <h4>24/7 Support</h4>
                  <p>Need help with something? No worries, we are always here to help! Send us an email or submit a ticket and we guide you through any issues you may have.</p>
                </ReasonDetails>
              </ReasonCard>
              <ReasonCard>
                <IconContainer>
                  <Image src="/image/growth.svg" alt="logo" width="50" height="50" />
                </IconContainer>
                <ReasonDetails>
                  <h4>Business Growth</h4>
                  <p>Your growth is our priority. Leverage on our community to expand your reach and grow your business.</p>
                </ReasonDetails>
              </ReasonCard>
            </ReasonContainer>
          </Section>
        </AboutSectrion>
        <BusinessSection>
          <Section column="100%" marginBottom="6rem">
            <ContentTile>
              <VerticalLine primaryColor><h4>Business</h4></VerticalLine>
            </ContentTile>
            <ContentDetails>
              <Paragraph whiteBg>
                Growing your business is about to get easier. Leverage our consumer base and expand your brand. If you own/manage/run a business in hotels, shortlets, spas, restaurants, bars, cafes, beach, beach resorts, museum, art galleries, game arcade and so on, then there is a room for you on the High side of life.
                Let HighTable take the stress out of running your business. Register with HighTable business and enjoy premium package such as business data analytics, reports, menu and inventory management, order management and other exciting features created for your success.
              </Paragraph>
            </ContentDetails>
            <BusinessCardsContainer>
              <BusinessCards>
                <Image src="/image/events.svg" alt="logo" layout="responsive" width="100" height="63" />
                <BusinessDetails>
                  <h4>Events & Attractions</h4>
                  <p>If your niche is events and attractions, such as spas, game arcades, museums, art galleries, theme parks and the likes, we&rsquo;ve got a space for you. Sign up today.</p>
                </BusinessDetails>
                <BusinessBtnContainer>
                  <button>Sign up&nbsp;&nbsp;<svg width="15" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0476 8.53766L9.27471 2.76473L11.7509 0.288574L21.7509 10.2886L11.7509 20.2886L9.27471 17.8124L15.0477 12.0395H0V8.53766H15.0476Z" fill="#FF9916" />
                  </svg>
</button>
                </BusinessBtnContainer>
              </BusinessCards>
              <BusinessCards>
                <Image src="/image/restaurant.svg" alt="logo" layout="responsive" width="100" height="63" />
                <BusinessDetails>
                  <h4>Restaurants & Nightlife</h4>
                  <p>If you create an ambience for people to have meals and drinks, like restaurants, cafe, clubs, bars, and so on.There&rsquo;s a space on the high side for you.
                    Register today.</p>
                </BusinessDetails>
                <BusinessBtnContainer>
                  <button>Register&nbsp;&nbsp;<svg width="15" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0476 8.53766L9.27471 2.76473L11.7509 0.288574L21.7509 10.2886L11.7509 20.2886L9.27471 17.8124L15.0477 12.0395H0V8.53766H15.0476Z" fill="#FF9916" />
                  </svg>
                  </button>
                </BusinessBtnContainer>
              </BusinessCards>
              <BusinessCards>
                <Image src="/image/hotels.svg" alt="logo" layout="responsive" width="100" height="63" />
                <BusinessDetails>
                  <h4>Hotels & Shortlets</h4>
                  <p>A business in hotels, short lets, beach resorts, and the likes, there&rsquo;s a reserved spot in our community for you.
                    Join Hightable to claim your spot.</p>
                </BusinessDetails>
                <BusinessBtnContainer>
                  <button>Join&nbsp;&nbsp;<svg width="15" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0476 8.53766L9.27471 2.76473L11.7509 0.288574L21.7509 10.2886L11.7509 20.2886L9.27471 17.8124L15.0477 12.0395H0V8.53766H15.0476Z" fill="#FF9916" />
                  </svg>
                  </button>
                </BusinessBtnContainer>
              </BusinessCards>
            </BusinessCardsContainer>
          </Section>
        </BusinessSection>
        <BusinessSection>
          <Section column="100%" marginBottom="6rem">
            <ContentTile>
              <VerticalLine primaryColor><h4>Consumer</h4></VerticalLine>
            </ContentTile>
            <ContentDetails>
              <Paragraph whiteBg>
                Experience Africa like never before. Are you a traveler? An adventurous person? A tourist perhaps? GenZ community looking to stay in trend? An influencer looking for the next place to explore?
                HighTable is available to satisfy all your needs. Be in the know of the newest and trendy restaurants, hotels and activities. Spoil yourself to a treat and engage your audience with fine ambience.
                Discover where to go and what to do, plan your next trip, read honest and reliable peer reviews, make reservations, connect with communities, and more.
              </Paragraph>
            </ContentDetails>
            <BusinessCardsContainer>
              <BusinessCards>
                <Image src="/image/whereToEat.svg" alt="logo" layout="responsive" width="100" height="63" />
                <BusinessDetails>
                  <h4>Where to eat</h4>
                  <p>They say food is essential for your wellbeing.What they don&rsquo;t say is &rsquo;where&rsquo; to get it.
                    Well, HighTable tells you where to get good meals to savour with friends.</p>
                </BusinessDetails>
                <BusinessBtnContainer>
                  <button>Discover&nbsp;&nbsp;<svg width="15" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0476 8.53766L9.27471 2.76473L11.7509 0.288574L21.7509 10.2886L11.7509 20.2886L9.27471 17.8124L15.0477 12.0395H0V8.53766H15.0476Z" fill="#FF9916" />
                  </svg>
                  </button>
                </BusinessBtnContainer>
              </BusinessCards>
              <BusinessCards>
                <Image src="/image/whereToStay.svg" alt="logo" layout="responsive" width="100" height="63" />
                <BusinessDetails>
                  <h4>Where to stay</h4>
                  <p>
                    New to town? Taking a trip? Need a vacay? Need a bed?
                    Hightable shows you a plethora of options with your convenience in mind.
                  </p>
                </BusinessDetails>
                <BusinessBtnContainer>
                  <button>Discover&nbsp;&nbsp;<svg width="15" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0476 8.53766L9.27471 2.76473L11.7509 0.288574L21.7509 10.2886L11.7509 20.2886L9.27471 17.8124L15.0477 12.0395H0V8.53766H15.0476Z" fill="#FF9916" />
                  </svg>
                  </button>
                </BusinessBtnContainer>
              </BusinessCards>
              <BusinessCards>
                <Image src="/image/whatToDo.svg" alt="logo" layout="responsive" width="100" height="63" />
                <BusinessDetails>
                  <h4>What to do</h4>
                  <p>
                    Bored and tired of staring at your screen? Go out and have some fun.
                    Hightable features amazing events to match your vibe.
                  </p>
                </BusinessDetails>
                <BusinessBtnContainer>
                  <button>Discover&nbsp;&nbsp;<svg width="15" height="15" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0476 8.53766L9.27471 2.76473L11.7509 0.288574L21.7509 10.2886L11.7509 20.2886L9.27471 17.8124L15.0477 12.0395H0V8.53766H15.0476Z" fill="#FF9916" />
                  </svg>
                  </button>
                </BusinessBtnContainer>
              </BusinessCards>
            </BusinessCardsContainer>
          </Section>
        </BusinessSection>
        <Section column="40% 40%" marginBottom="6rem">
          <ContentContainer>
            <ImageWrapper><Image src="/image/blog.svg" alt="logo" layout="responsive" width="100" height="70" sizes="100vw" /></ImageWrapper>
          </ContentContainer>
          <ContentContainer center>
            <ContentTile>
              <VerticalLine primaryColor><h4>Our Blog</h4></VerticalLine>
            </ContentTile>
            <ContentDetails>
              <Paragraph whiteBg>
                HighTable blog offers travel, tourism, and hospitality tips and guides to our users. You will also be informed on other people’s top picks on anything travel, restaurants, entertainment, food and so on. Our blog also includes people’s travel and hospitality experiences, be it good or bad so you can be encouraged or learn a lesson.
                Great news is that you can also write blogs for HighTable Africa as a contributor.
              </Paragraph>
            </ContentDetails>
            <SignupBtn>Get Informed</SignupBtn>
          </ContentContainer>
        </Section>
        <Section column="40% 40%" marginBottom="6rem">
          <ContentContainer center>
            <ContentTile>
              <VerticalLine primaryColor><h4>Join our Amazing Team</h4></VerticalLine>
            </ContentTile>
            <ContentDetails>
              <Paragraph whiteBg>
                There are jobs and there are careers. Here, we are High! about career progress.
                Take your career to the next level with us. If you are just starting out, there&rsquo;s a place for you here.
                We embrace people from all paths, culture, religion and we are gender equal.
                Stay in the loop of exciting offers
              </Paragraph>
            </ContentDetails>
            <SignupBtn>View Opportunities</SignupBtn>
          </ContentContainer>
          <ContentContainer>
            <ImageWrapperForOffer><Image src="/image/jobOffer.svg" alt="logo" layout="responsive" width="100" height="70" sizes="100vw" /></ImageWrapperForOffer>
          </ContentContainer>
        </Section>
        <Section column="100%" marginBottom="4rem">
          <TestimonyTitleWrapper>
            <TestimonyTiltle>What our users are</TestimonyTiltle>
            &nbsp;
            <TestimonyTiltle primary>saying</TestimonyTiltle>
          </TestimonyTitleWrapper>
        </Section>
      </Main>
    </Layout>
  );
}
