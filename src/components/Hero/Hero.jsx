import React from "react";
import styled from "styled-components";
import mobilePattern from "assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";
import tabletPattern from "assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg";

const Hero = ({ title, description }) => {
  return (
    <Wrapper>
      <Pattern>
        <source media="(max-width:767px)" srcSet={mobilePattern} />
        <source media="(min-width:768px)" srcSet={tabletPattern} />
        <img src={mobilePattern} alt="circle pattern" />
      </Pattern>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Pattern = styled.picture`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (min-width: 768px) {
    top: 50%;
    right: unset;
    left: 0;
    transform: translate(-3%, -50%);
  }
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 25px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    margin: 0 auto;
    width: 400px;
  }
`;
const Title = styled.h1`
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }
`;
const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.peach};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding: 105px 24px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    padding: 64px 24px;
    margin: 0 40px;
    border-radius: 15px;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export default Hero;
