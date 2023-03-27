import React from "react";
import styled from "styled-components";
import backgroundPattern from "assets/shared/desktop/bg-pattern-three-circles.svg";
const AboutCard = ({
  left,
  title,
  mobileImage,
  tabletImage,
  desktopImage,
  firstParagraph,
  secondParagraph,
}) => {
  console.log(desktopImage);
  return (
    <Wrapper left={left}>
      <Picture>
        <source media="(max-width:767px)" srcSet={mobileImage} />
        <source media="(max-width:1023px)" srcSet={tabletImage} />
        <source media="(min-width:1024px)" srcSet={desktopImage} />
        <img src={mobileImage} alt="poster on wall" />
      </Picture>
      <Info url={backgroundPattern}>
        <Title>{title}</Title>
        <ParagraphWrapper>
          <Paragraph>{firstParagraph}</Paragraph>
          <Paragraph>{secondParagraph}</Paragraph>
        </ParagraphWrapper>
      </Info>
    </Wrapper>
  );
};

const Picture = styled.picture`
  display: flex;
  width: 100%;
  img {
    object-fit: cover;
    min-width: 100%;
  }

  @media screen and (min-width: 768px) {
    height: 320px;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      top: -70px;
    }
  }
  @media screen and (min-width: 1024px) {
    position: unset;
    overflow: unset;
    height: 100%;
    flex: 1 1 40%;
    img {
      position: unset;
      object-fit: cover;
    }
  }
`;

const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.darkGrey};
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.peach};
  @media screen and (min-width: 1024px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Info = styled.div`
  padding: 80px 24px;
  text-align: center;
  background: url(${(props) => props.url}), linear-gradient(#fdf3f0, #fdf3f0);

  @media screen and (min-width: 768px) {
    background-position: bottom -20% right 10%;
  }
  @media screen and (min-width: 1024px) {
    flex: 1 1 60%;
    padding: 0 96px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;

  @media screen and (min-width: 768px) {
    margin: 0 40px 120px;
    border-radius: 15px;
    overflow: hidden;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: ${(props) => (props.left ? "row-reverse" : "row")};
    margin: 0 0 120px;
  }
`;

export default AboutCard;
