import React from "react";
import styled from "styled-components";
import Button from "components/Button/Button";
import background from "assets/home/desktop/bg-pattern-hero-home.svg";
import phoneImage from "assets/home/desktop/image-hero-phone.png";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/about");
  };

  return (
    <Wrapper url={background}>
      <InfoWrapper>
        <StyledHeading>
          Award-winning custom designs and digital branding solutions{" "}
        </StyledHeading>
        <StyledParagraph>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </StyledParagraph>
        <Button onClick={handleOnClick} dark>
          Learn more
        </Button>
      </InfoWrapper>
      <StyledImageWrapper>
        <StyledImage src={phoneImage} alt="phone" />
      </StyledImageWrapper>
    </Wrapper>
  );
};
const StyledImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 40%;
  z-index: 0;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -9%);
  pointer-events: none;
  @media screen and (min-width: 1024px) {
    left: unset;
    right: -140px;
    transform: translate(0, -9%);
  }
`;

const StyledHeading = styled.h2`
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 30px;
  }
`;

const StyledParagraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    padding: 0 60px;
    margin-bottom: 19px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 0;
    width: 75%;
    margin-bottom: 30px;
  }
`;

const InfoWrapper = styled.div`
  text-align: center;
  z-index: 10;
  @media screen and (min-width: 1024px) {
    width: 60%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  background: url(${(props) => props.url}) no-repeat left center,
    linear-gradient(
      ${(props) => props.theme.colors.peach},
      ${(props) => props.theme.colors.peach}
    );
  padding: 80px 24px 0;
  color: ${(props) => props.theme.colors.white};
  height: 843px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    padding: 60px 58px;
    margin: 0 40px;
    border-radius: 15px;
    background-position: left 170px center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 640px;
    background-position: right;
    margin: 0;
  }
`;

export default HomeHero;
