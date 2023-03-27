import React from "react";
import styled from "styled-components";
import aboutHeroMobile from "assets/about/mobile/image-about-hero.jpg";
import aboutHeroTablet from "assets/about/tablet/image-about-hero.jpg";
import aboutHeroDesktop from "assets/about/desktop/image-about-hero.jpg";
import heroPattern from "assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import heroDesktopPattern from "assets/about/desktop/bg-pattern-hero-about-desktop.svg";
const AboutUsHero = () => {
  return (
    <Wrapper>
      <Picture>
        <source media="(max-width:767px)" srcSet={aboutHeroMobile} />
        <source media="(max-width:1023px)" srcSet={aboutHeroTablet} />
        <source media="(min-width:1024px)" srcSet={aboutHeroDesktop} />
        <img src={aboutHeroDesktop} alt="people work on project" />
      </Picture>
      <TextWrapper url={heroPattern} urlDesktop={heroDesktopPattern}>
        <Title> About us</Title>
        <Description>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </Description>
      </TextWrapper>
    </Wrapper>
  );
};

const Picture = styled.picture`
  display: flex;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1024px) {
    flex: 1 1 40%;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 24px;
  @media screen and (min-width: 1024px) {
    font-size: 48px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 25px;
`;

const TextWrapper = styled.div`
  background: url(${(props) => props.url}) right top 25%,
    linear-gradient(
      ${(props) => props.theme.colors.peach},
      ${(props) => props.theme.colors.peach}
    );
  padding: 80px 24px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};

  @media screen and (min-width: 1024px) {
    background: url(${(props) => props.urlDesktop}) bottom,
      linear-gradient(
        ${(props) => props.theme.colors.peach},
        ${(props) => props.theme.colors.peach}
      );
    text-align: left;
    padding: 0 82px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 1 60%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin: 0 40px 120px;
    border-radius: 15px;
    overflow: hidden;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    margin: 0 0 120px;
  }
`;

export default AboutUsHero;
