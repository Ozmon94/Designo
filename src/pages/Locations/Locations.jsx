import React, { useEffect, useRef } from "react";
import Footer from "components/Footer/Footer";
import styled from "styled-components";
import backgroundPattern from "assets/shared/desktop/bg-pattern-three-circles.svg";

import canadaTablet from "assets/locations/tablet/image-map-canada.png";
import canadaDesktop from "assets/locations/desktop/image-map-canada.png";
import australiaTablet from "assets/locations/tablet/image-map-australia.png";
import australiaDesktop from "assets/locations/desktop/image-map-australia.png";
import ukTablet from "assets/locations/tablet/image-map-uk.png";
import ukDesktop from "assets/locations/desktop/image-map-united-kingdom.png";
import { useLocation } from "react-router-dom";
import PageWrapper from "components/PageWrapper";
const Locations = () => {
  const canadaRef = useRef(null);
  const australiaRef = useRef(null);
  const ukRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.country) {
      if (location.state.country === "canada" && canadaRef.current) {
        window.scrollTo(0, canadaRef.current.offsetTop);
      } else if (
        location.state.country === "australia" &&
        australiaRef.current
      ) {
        window.scrollTo(0, australiaRef.current.offsetTop);
      } else if (location.state.country === "uk" && ukRef.current) {
        window.scrollTo(0, ukRef.current.offsetTop);
      }
    }
  }, [location]);
  return (
    <>
      <PageWrapper>
        <LocationList>
          <LocationItem ref={canadaRef}>
            <Picture>
              <source media="(max-width:767px)" srcSet={canadaDesktop} />
              <source media="(max-width:1023px)" srcSet={canadaTablet} />
              <source media="(min-width:1024px)" srcSet={canadaDesktop} />
              <img src={canadaDesktop} alt="Map with Canada location" />
            </Picture>

            <Info>
              <BackgroundPattern>
                <img src={backgroundPattern} alt="background pattern" />
              </BackgroundPattern>
              <Name>Canada</Name>
              <DescriptionWrapper>
                <Description>
                  <b>Designo Central Office</b> <br />
                  3886 Wellington Street <br />
                  Toronto, Ontario M9C 3J5
                </Description>
                <Description>
                  <b>Contact</b> <br />
                  P : +1 253-863-8967 <br />M : contact@designo.co
                </Description>
              </DescriptionWrapper>
            </Info>
          </LocationItem>
          <LocationItem ref={australiaRef} left={true}>
            <Picture>
              <source media="(max-width:767px)" srcSet={australiaDesktop} />
              <source media="(max-width:1023px)" srcSet={australiaTablet} />
              <source media="(min-width:1024px)" srcSet={australiaDesktop} />
              <img src={australiaDesktop} alt="Map with Australia location" />
            </Picture>
            <Info>
              <BackgroundPattern>
                <img src={backgroundPattern} alt="background pattern" />
              </BackgroundPattern>
              <Name>Australia</Name>
              <DescriptionWrapper>
                <Description>
                  <b>Designo AU Office</b>
                  <br />
                  19 Balonne Street <br />
                  New South Wales 2443
                </Description>
                <Description>
                  <b>Contact </b> <br />
                  P : (02) 6720 9092 <br />M : contact@designo.au
                </Description>
              </DescriptionWrapper>
            </Info>
          </LocationItem>
          <LocationItem ref={ukRef}>
            <Picture>
              <source media="(max-width:767px)" srcSet={ukDesktop} />
              <source media="(max-width:1023px)" srcSet={ukTablet} />
              <source media="(min-width:1024px)" srcSet={ukDesktop} />
              <img src={ukDesktop} alt="Map with United Kingdom location" />
            </Picture>
            <Info>
              <BackgroundPattern>
                <img src={backgroundPattern} alt="background pattern" />
              </BackgroundPattern>
              <Name>United Kingdom</Name>
              <DescriptionWrapper>
                <Description>
                  <b>Designo UK Office</b>
                  <br />
                  13 Colorado Way <br />
                  Rhyd-y-fro SA8 9GA
                </Description>
                <Description>
                  <b>Contact </b>
                  <br />
                  P : 078 3115 1400
                  <br /> M : contact@designo.uk
                </Description>
              </DescriptionWrapper>
            </Info>
          </LocationItem>
        </LocationList>
      </PageWrapper>
      <Footer />
    </>
  );
};

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const BackgroundPattern = styled.picture`
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (min-width: 768px) {
    top: unset;
    left: 0;
    bottom: 0;
  }
`;

const LocationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 120px;
  @media screen and (min-width: 768px) {
    margin: 0 40px 120px;
    gap: 120px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    margin: 0 auto 120px;
    gap: 32px;
  }
`;

const LocationItem = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    gap: 31px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: ${(props) => (props.left ? "row" : "row-reverse")};
  }
`;

const Picture = styled.picture`
  display: flex;

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    border-radius: 15px;
    overflow: hidden;
  }
  @media screen and (min-width: 1024px) {
    img {
      object-fit: cover;
      max-width: 350px;
    }
  }
`;

const Info = styled.div`
  background: #fdf3f0;
  padding: 80px 24px;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    border-radius: 15px;
    padding: 88px 75px;
    text-align: left;
  }
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

const Name = styled.h2`
  font-size: 32px;
  line-height: 36px;
  color: ${(props) => props.theme.colors.peach};
  margin-bottom: 24px;
`;

const Description = styled.p`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;
export default Locations;
