import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hero from "../../assets/Hero.png";
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";
import Img3 from "../../assets/Img3.png";
import Img4 from "../../assets/Img4.png";
import Img5 from "../../assets/Img5.png";
import FeaturedBanner from "../../assets/Featuredbanner.png";
import Img6 from "../../assets/Img6.png";
import Img7 from "../../assets/Img7.png";
import Img8 from "../../assets/Img8.png";
import Arrows from "../../assets/Arrows.svg";
import Footer from "../Footer";

export default function index(props) {
  const CardInfo = [
    {
      img: Img3,
      route: "/",
      title: "Chat to a student",
      textDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      img: Img4,
      route: "/",
      title: "Support",
      textDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      img: Img5,
      route: "/",
      title: "Life in Ludlow",
      textDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];
  const UpComingDetails = [
    {
      img: Img8,
      route: "/",
      title: "Life in Ludlow",
      date: "01",
      month: "AUG",
      textDetails: "Ludlow campus rock festival 2019",
    },
    {
      img: Img6,
      route: "/",
      title: "Life in Ludlow",
      date: "14",
      month: "AUG",
      textDetails: "2019 game design exhibition",
    },
    {
      img: Img7,
      route: "/",
      title: "Life in Ludlow",
      date: "21",
      month: "AUG",
      textDetails: "Study collaboration session",
    },
  ];

  return (
    <>
      <Container>
        <HeroWrapper>
          <h6>Home</h6>
          <HeroContainer>
            <LeftHero>
              <h1>STUDENT LIFE</h1>
              <h3>
                There is so much going on at Ludlow University, both on and off
                campus.{" "}
              </h3>
              <h4>Lisa Smith</h4>
              <p>Student, BSc (Hons) Computer Games Design </p>
              <Button>
                <div>View Student Stories</div>
              </Button>
            </LeftHero>
            <RightHero>
              <img src={hero} alt="hero" />
            </RightHero>
          </HeroContainer>
        </HeroWrapper>
        <PerksSection>
          <Activities>
            <Details>
              <div>
                <h5>Activities and clubs</h5>{" "}
                <Link to="/">
                  <img src={Arrows} alt="" />
                </Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </Details>
          </Activities>
          <Accomodation>
            <Details>
              <div>
                <h5>Accomodation</h5>{" "}
                <Link to="/">
                  <img src={Arrows} alt="" />
                </Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </Details>
          </Accomodation>
        </PerksSection>
        <ActionCards>
          {CardInfo.map((card, i) => {
            return (
              <ActionCard key={i}>
                <CardImg
                  style={{
                    backgroundImage: "url(" + card.img + ")",
                    backgroundSize: "cover",
                  }}
                ></CardImg>
                <CardDetails>
                  <div>
                    <h5>{card.title}</h5>{" "}
                    <Link to={card.route}>
                      <img src={Arrows} alt="" />
                    </Link>
                  </div>
                  <p>{card.textDetails}</p>
                </CardDetails>
              </ActionCard>
            );
          })}
        </ActionCards>
        <SmallCTA>
          <Button>
            <div>View All events</div>
          </Button>
        </SmallCTA>
      </Container>
      <BannerSection>
        <BannerContainer>
          <hr />
          <h3>
            Come along to one of our Open Days and find out everything you need
            to know about the campus, courses, and facilities
          </h3>
          <Button>
            <div>Book an Open Day</div>
          </Button>
        </BannerContainer>
      </BannerSection>
      <Container>
        <UpcomingHeader>
          <h3>Upcoming events</h3>
          <Button>
            <div>View All events</div>
          </Button>
        </UpcomingHeader>
        <Upcoming>
          {UpComingDetails.map((details) => {
            return (
              <UpComingCard
                style={{
                  backgroundImage: "url(" + details.img + ")",
                  backgroundSize: "cover",
                }}
              >
                <CardDate>
                  <h3>{details.date}</h3>
                  <h5>{details.month}</h5>
                </CardDate>
                <GradientOverlay>
                  <h5>Ludlow campus rock festival 2019</h5>
                </GradientOverlay>
              </UpComingCard>
            );
          })}
        </Upcoming>
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  padding-bottom: 100px;
  @media (min-width: 1366.1px) {
    width: 1280px;
    margin: auto;
    color: black;
  }
  @media (max-width: 1366px) {
    width: 1024px;
    margin: auto;
  }
  @media (max-width: 1100px) {
    width: 950px;
    margin: auto;
  }
  @media (max-width: 991px) {
    width: 90%;
    // margin-right:auto;
  }
`;

const HeroWrapper = styled.div`
  padding-top: 84px;
  h6 {
    text-decoration: underline;
    // border-bottom:1px solid var(--mainBlack);
    font-size: 14px;
    font-family: "Fira Sans", sans-serif;
  }
`;
const HeroContainer = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-between;
`;
const LeftHero = styled.div`
  width: 510px;
  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 56px;
  }
  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    line-height: 48px;
    margin-top: 40px;
    margin-bottom: 48px;
  }
  h4 {
    font-size: 24px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    font-family: "Fira Sans", sans-serif;
    margin-bottom: 64px;
  }
  @media(max-width:1366px){
    width:500px;
    h1{
      font-size:42px;
      margin-bottom:20px;
    }
    h4{
      margin-bottom:0px;
    }
    h3{
      font-size:30px;
      margin-top:24px;
      margin-bottom:24px;
    }
    p{
      margin-bottom:36px;
    }
   
  @media(max-width:1100px){
    width:450px;
  }
  @media(max-width:768px){
    width:80%;
    margin:auto;
  }
  @media(max-width:576px){
    width:100%;
    margin:auto;
  }
`;
const Button = styled.button`
  position: relative;

  z-index: 1;
  color: black;
  border: none;
  min-width: 290px;
  height: 64px;
  div {
    z-index: 10;
    position: relative;
    color: var(--mainBlack);
    text-align: center;
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    :hover {
      cursor: pointer;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    border: 1px solid transparent;
    z-index: 5;
    background-clip: padding-box;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      100.95deg,
      #00c2ff,
      #fa2673 52.23%,
      #8326fa 81.29%
    );
    z-index: 1;
  }
`;

const RightHero = styled.div`
  @media (max-width: 1366px) {
    img {
      width: 500px;
    }
  }
  @media (max-width: 1100px) {
    img {
      width: 450px;
    }
  }
  @media (max-width: 991px) {
    display: none;
  }
`;
const PerksSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  position: relative;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 45px;
  }
`;
const Activities = styled.div`
  background-size: cover;
  height: 520px;
  width: 730px;
  background-image: url(${Img1});
  display: flex;
  align-items: flex-end;
  text-align: left;
  @media (max-width: 1366px) {
    width: 400px;
  }
  @media (max-width: 991px) {
    width: 330px;
    height: 450px;
  }
  @media (max-width: 768px) {
    height: 520px;
    width: 510px;
    margin: auto;
  }
  @media (max-width: 576px) {
    height: 400px;
    width: 100%;
    margin: auto;
  }
`;
const Accomodation = styled.div`
  background-size: cover;
  height: 520px;
  width: 510px;
  background-image: url(${Img2});
  display: flex;
  align-items: flex-end;
  text-align: left;
  @media (max-width: 1366px) {
    width: 400px;
  }
  @media (max-width: 991px) {
    width: 330px;
    height: 450px;
  }
  @media (max-width: 768px) {
    height: 520px;
    width: 510px;
    margin: auto;
  }
  @media (max-width: 576px) {
    height: 400px;
    width: 100%;
    margin: auto;
  }
`;
const Details = styled.div`
  background-color: white;
  width: 400px;
  height: 168px;
  padding-top: 32px;
  padding-left: 24px;
  margin-bottom: -64px;
  div {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    h5 {
      font-family: "Oswald", sans-serif;
      font-size: 20px;
      margin-bottom: 0px;
      margin-top: 0px;
    }
  }
  p {
    font-family: "Fira Sans", sans-serif;
    font-size: 16px;
    line-height: 24px;
    width: 352px;
  }
  @media (max-width: 991px) {
    width: 330px;
    p {
      width: 100%;
    }
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const ActionCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  // @media(max-width:991px){
  //   flex-wrap:wrap;
  //   gap:50px;
  // }
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 70px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 70px;
    gap: 70px;
  }
`;
const SmallCTA = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    padding-top: 80px;
  }
  @media (max-width: 576px) {
    padding-top: 40px;
  }
`;
const ActionCard = styled.div`
  width: 400px;
  @media (max-width: 1366px) {
    width: 300px;
  }
  @media (max-width: 991px) {
    width: 330px;
  }
  @media (max-width: 768px) {
    height: 520px;
    width: 510px;
    margin: auto;
  }
  @media (max-width: 576px) {
    height: 400px;
    width: 100%;
    margin: auto;
  }
`;
const CardImg = styled.div`
  height: 416px;
  width: 400px;
  @media (max-width: 1366px) {
    width: 300px;
    height: 316px;
  }
  @media (max-width: 991px) {
    width: 330px;
  }
  @media (max-width: 768px) {
    height: 520px;
    width: 510px;
    margin: auto;
  }
  @media (max-width: 576px) {
    height: 400px;
    width: 100%;
    margin: auto;
  }
`;
const CardDetails = styled.div`
  background-color: white;
  width: 400px;
  height: 168px;
  padding-top: 32px;
  padding-left: 24px;
  margin-bottom: -64px;
  div {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    h5 {
      font-family: "Oswald", sans-serif;
      font-size: 20px;
      margin-bottom: 0px;
      margin-top: 0px;
    }
  }
  p {
    font-family: "Fira Sans", sans-serif;
    font-size: 16px;
    line-height: 24px;
    width: 352px;
  }
  @media (max-width: 1366px) {
    width: 300px;
    p {
      width: 90%;
    }
  }
  @media (max-width: 768px) {
    width: 330px;
    margin-top: -130px;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const BannerSection = styled.div`
  background-image: url(${FeaturedBanner});
  height: 528px;
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 350px;
  }
`;
const BannerContainer = styled.div`
  text-align: center;
  hr {
    width: 80px;
    height: 2px;
    background: linear-gradient(98.01deg, #00c2ff 14.16%, #ff27c3 79.91%);
    border-color: transparent;
  }
  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    line-height: 48px;
    color: white;
    width: 842px;
    text-align: center;
    margin: auto;
    margin-top: 14px;
    margin-bottom: 24px;
  }
  @media (min-width: 1366.1px) {
    width: 1280px;
    margin: auto;
    color: black;
  }
  @media (max-width: 1100px) {
    width: 950px;
    margin: auto;
  }

  @media (max-width: 1366px) {
    width: 1024px;
    margin: auto;
    h3 {
      font-size: 32px;
      line-height: 40px;
    }
  }
  @media (max-width: 991px) {
    width: 90%;
    h3 {
      font-size: 28px;
      line-height: 36px;
      width: 85%;
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
      line-height: 26px;
      font-weight: 300;
    }
  }
`;

const UpcomingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 64px;
  margin-bottom: 48px;
  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 40px;
    line-height: 48px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
      line-height: 28px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
  // @media(max-width:576px){
  //   flex-wrap:wrap;
  //   gap:20px;
  //   text-align:center;
  //   width:350px;
  //   margin:auto;
  //   margin-top:35px;
  // }
`;
const Upcoming = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;
const UpComingCard = styled.div`
  width: 400px;
  height: 624px;
  position: relative;
  @media (max-width: 1366px) {
    width: 330px;
    height: 524px;
  }
`;
const CardDate = styled.div`
  position: relative;
  background-color: white;
  width: 180px;
  height: 176px;
  text-align: center;
  h3 {
    font-weight: 300;
    color: var(--mainPink);
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 16px;
    font-size: 56px;
    font-family: "Oswald", sans-serif;
  }
  h5 {
    font-family: "Oswald", sans-serif;
    font-weight: 300;
    font-size: 40px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  @media (max-width: 1366px) {
    width: 120px;
    height: 116px;
    h3 {
      font-size: 40px;
      padding-top: 5px;
    }
    h5 {
      font-size: 36px;
      font-weight: 300;
    }
  }
`;
const GradientOverlay = styled.div`
  background: linear-gradient(
    176.14deg,
    rgba(0, 0, 0, 0) 8.29%,
    rgba(0, 0, 0, 0.4) 48.66%
  );
  height: 280px;
  width: 400px;
  position: absolute;
  bottom: 0;
  z-index: 1;
  h5 {
    color: white;
    font-size: 40px;
    line-height: 48px;
    font-family: "Oswald", sans-serif;
    margin-left: 15px;
    margin-top: 136px;
  }
  @media (max-width: 1366px) {
    width: 100%;
    height: 180px;
    h5 {
      margin-top: 26px;
      font-size: 32px;
    }
  }
`;
