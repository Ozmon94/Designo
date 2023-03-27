import React from "react";
import styled from "styled-components";
import { ReactComponent as Canada } from "assets/shared/desktop/illustration-canada.svg";
import { ReactComponent as Australia } from "assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as UK } from "assets/shared/desktop/illustration-united-kingdom.svg";
import { ReactComponent as Circle } from "assets/shared/desktop/bg-pattern-small-circle.svg";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";
const CountryList = () => {
  const navigate = useNavigate();

  const handleOnClick = (to) => {
    navigate(`/locations`, { state: { country: to } });
  };
  return (
    <Wrapper>
      <CountryItem>
        <ImageWrapper>
          <Canada />
          <StyledCircle />
        </ImageWrapper>
        <Name>Canada</Name>
        <Button onClick={() => handleOnClick("canada")}>See location</Button>
      </CountryItem>
      <CountryItem>
        <ImageWrapper>
          <Australia />
          <StyledCircle />
        </ImageWrapper>
        <Name>Australia</Name>
        <Button onClick={() => handleOnClick("australia")}>
          See location{" "}
        </Button>
      </CountryItem>
      <CountryItem>
        <ImageWrapper>
          <UK />
          <StyledCircle />
        </ImageWrapper>
        <Name>United Kingdom</Name>
        <Button onClick={() => handleOnClick("uk")}>See location </Button>
      </CountryItem>
    </Wrapper>
  );
};

const StyledCircle = styled(Circle)`
  position: absolute;
  z-index: -1;
`;
const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 48px;
`;
const Name = styled.h3`
  font-size: 20px;
  line-height: 26px;
  text-transform: uppercase;
  margin: 32px auto;
`;

const CountryItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export default CountryList;
