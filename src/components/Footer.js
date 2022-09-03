import React from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import Icon from "../assets/icon.svg";
import { Link } from "react-router-dom";
import TwitterBlue from "../assets/TwitterBlue.svg";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Google from "../assets/Google.svg";
import Linkedin from "../assets/Linkedin.svg";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <img src={Logo} alt="" />
        </LogoContainer>
        <Tweet>
          <Flex>
            <TwitterLogo>
              <img src={Icon} alt="Ludlow Logo" />
              <div>
                <h6>Ludlow University</h6>
                <p>@ludlowuni</p>
              </div>
            </TwitterLogo>
            <Link to="/">
              <img src={TwitterBlue} alt="Twitter Logo" />
            </Link>
          </Flex>
          <h5>
            Ludlow university students enjoying a selfie after the 2019
            #campuspaintrun. A total of £4913.14 was raised for multiple
            charities. #runformoney.
          </h5>
          <h6>11:44 AM · Jul 10, 2019</h6>
        </Tweet>
        <SocialMedia>
          <a href="/"><img src={Twitter} alt=""/></a>
          <a href="/"><img src={Linkedin} alt=""/></a>
          <a href="/"><img src={Google} alt=""/></a>
          <a href="/"><img src={Facebook} alt=""/></a>
        </SocialMedia>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
`;
const Container = styled.div`
  position: relative;
  @media (min-width: 1336.1px) {
    width: 1280px;
    margin: auto;
    border-top: 1px solid #e6e6e6;
    padding-top: 64px;
    padding-bottom:64px;
  }
  @media(max-width:1366px){
    width:1024px;
    margin:auto;
  }
  @media(max-width:1100px){
    width:950px;
    margin:auto;
  }
  @media(max-width:991px){
    width:90%;
    // margin-right:auto;
  }
`;
const LogoContainer = styled.div`
  img {
    width: 159px;
    height: 48px;
  }
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    text-align: left;
    width: 100%;
    margin-right: 0px;
    // padding-top: 20px;
    padding-bottom: 20px;

    img {
      width: 90px;
      height: 24px;
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  @media(max-width:768px){
    margin-bottom:20px;
    img{
      padding-left:0px;
      padding-right:0px;

    }
  }
`;
const Tweet = styled.div`
  margin-left: auto;
  width: 368px;
  h5 {
    color: var(--mainBlack);
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
    margin-bottom: 0px;
  }
  h6 {
    color: #8595a5;
    font-size: 14px;
    margin-top: 32px;
  }
  @media(max-width:768px){
    margin-right:auto;
    margin-left:0;
  }
  @media(max-width:426px){
width:100%;
margin:auto;
  }
`;
const TwitterLogo = styled.div`
  display: flex;
  gap: 18px;
  h6 {
    color: var(--mainBlack);
    font-size: 16px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
    color: #8595a5;
  }
`;
const SocialMedia = styled.div `
display:flex;
align-items:center;
gap:24px;
img{
  width:24px;
  height:24px;
}
`
