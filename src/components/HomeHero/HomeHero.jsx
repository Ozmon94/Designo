import React from "react";
import styled from "styled-components";
import Button from "components/Button/Button";
import background from "assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";
import phoneImage from "assets/home/desktop/image-hero-phone.png";

const HomeHero = () => {
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
        <Button dark>Learn more</Button>
      </InfoWrapper>
      <StyledImage src={phoneImage} alt="phone" />
    </Wrapper>
  );
};

const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 40%);
`;

const StyledHeading = styled.h2`
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0;
  margin-bottom: 14px;
`;

const StyledParagraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 24px;
`;

const InfoWrapper = styled.div`
  text-align: center;
  z-index: 1;
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.peach};
  background-image: url(${(props) => props.url});
  background-size: cover;
  padding: 80px 24px 0;
  color: ${(props) => props.theme.colors.white};
  height: 843px;
  position: relative;
  overflow: hidden;
`;

export default HomeHero;
