import React from "react";
import styled from "styled-components";

const DesignCard = ({ url, title, description }) => {
  return (
    <Wrapper>
      <Image src={url} />
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: unset;
    height: 310px;
  }
  @media screen and (min-width: 1024px) {
    width: unset;
    height: 320px;
    object-fit: cover;
  }
`;

const Info = styled.div`
  background-color: #fdf3f0;
  padding: 32px 24px;
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.peach};
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.darkGrey};
`;

export default DesignCard;
