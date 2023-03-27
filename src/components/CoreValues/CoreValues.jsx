import React from "react";
import styled from "styled-components";
import { ReactComponent as Passionate } from "assets/home/desktop/illustration-passionate.svg";
import { ReactComponent as ResourceFul } from "assets/home/desktop/illustration-resourceful.svg";
import { ReactComponent as Friendly } from "assets/home/desktop/illustration-friendly.svg";
import { ReactComponent as Circle } from "assets/shared/desktop/bg-pattern-small-circle.svg";
const CoreValues = () => {
  return (
    <Wrapper>
      <ValueCard>
        <ImageContainer>
          <StyledCircle />
          <Passionate />
        </ImageContainer>
        <TextContainer>
          <Title> Passionate</Title>
          <Paragraph>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </Paragraph>
        </TextContainer>
      </ValueCard>
      <ValueCard>
        <ImageContainer>
          <StyledCircle />
          <ResourceFul />
        </ImageContainer>
        <TextContainer>
          <Title> Resourceful </Title>
          <Paragraph>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </Paragraph>
        </TextContainer>
      </ValueCard>
      <ValueCard>
        <ImageContainer>
          <StyledCircle />
          <Friendly />
        </ImageContainer>
        <TextContainer>
          <Title> Friendly</Title>
          <Paragraph>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </Paragraph>
        </TextContainer>
      </ValueCard>
    </Wrapper>
  );
};

const TextContainer = styled.div``;
const Paragraph = styled.p``;

const Title = styled.h3`
  margin: 48px auto 32px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin: 0 0 14px;
  }
`;

const StyledCircle = styled(Circle)`
  position: absolute;
  z-index: -1;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Wrapper = styled.div`
  padding: 0 24px 120px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  @media screen and (min-width: 768px) {
    padding: 0 40px 120px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin: 0;
    gap: 40px;
    padding: 0 24px 160px;
  }
`;

const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 48px;
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

export default CoreValues;
