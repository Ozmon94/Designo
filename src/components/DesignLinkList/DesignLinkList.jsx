import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import webDesignMobile from "assets/home/mobile/image-web-design.jpg";
import webDesignTablet from "assets/home/tablet/image-web-design.jpg";
import webDesignDesktopSmall from "assets/home/desktop/image-web-design-small.jpg";
import webDesignDesktopLarge from "assets/home/desktop/image-web-design-large.jpg";
import appDesignMobile from "assets/home/mobile/image-app-design.jpg";
import appDesignTablet from "assets/home/tablet/image-app-design.jpg";
import appDesignDesktop from "assets/home/desktop/image-app-design.jpg";
import graphicDesignMobile from "assets/home/mobile/image-graphic-design.jpg";
import graphicDesignTablet from "assets/home/tablet/image-graphic-design.jpg";
import graphicDesignDesktop from "assets/home/desktop/image-graphic-design.jpg";
import { ReactComponent as Arrow } from "assets/shared/desktop/icon-right-arrow.svg";

const DesignLinkList = () => {
  const location = useLocation();

  return (
    <Wrapper main={location.pathname === "/"}>
      {location.pathname !== "/app-design" && (
        <StyledLink to="/app-design" style={{ gridArea: "app" }}>
          <Picture>
            <source media="(max-width:767px)" srcSet={appDesignMobile} />
            <source media="(max-width:1024px)" srcSet={appDesignTablet} />
            <source media="(min-width:1025px)" srcSet={appDesignDesktop} />
            <img src={appDesignMobile} alt="Web design" />
          </Picture>
          <Info>
            <h2>App Design </h2>
            <p>
              View Projects
              <Arrow />
            </p>
          </Info>
        </StyledLink>
      )}
      {location.pathname !== "/web-design" && (
        <StyledLink to="/web-design" style={{ gridArea: "web" }}>
          <Picture>
            <source media="(max-width:767px)" srcSet={webDesignMobile} />
            <source media="(max-width:1024px)" srcSet={webDesignTablet} />
            <source media="(min-width:1025px)" srcSet={webDesignDesktopLarge} />
            <img src={webDesignMobile} alt="Web design" />
          </Picture>
          <Info>
            <h2>Web Design</h2>
            <p>
              View Projects
              <Arrow />
            </p>
          </Info>
        </StyledLink>
      )}

      {location.pathname !== "/graphic-design" && (
        <StyledLink to="/graphic-design" style={{ gridArea: "graph" }}>
          <Picture>
            <source media="(max-width:767px)" srcSet={graphicDesignMobile} />
            <source media="(max-width:1024px)" srcSet={graphicDesignTablet} />
            <source media="(min-width:1025px)" srcSet={graphicDesignDesktop} />
            <img src={graphicDesignMobile} alt="Web design" />
          </Picture>
          <Info>
            <h2>Graphic Design</h2>
            <p>
              View Projects
              <Arrow />
            </p>
          </Info>
        </StyledLink>
      )}
    </Wrapper>
  );
};
const Info = styled.div`
  min-height: 100%;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 88px 36px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  h2 {
    font-size: 28px;
    letter-spacing: 1.4px;
    line-height: 36px;
  }
  p {
    font-size: 15px;
    letter-spacing: 5px;

    svg {
      margin-left: 16px;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 53px 36px;
    gap: 24px;
    h2 {
      font-size: 40px;
      letter-spacing: 2px;
      line-height: 48px;
    }
    p {
      svg {
        margin-left: 21px;
      }
    }
  }
`;

const Picture = styled.picture`
  position: absolute;
  inset: 0;
  z-index: -1;
  img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

const StyledLink = styled(Link)`
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  display: block;
  text-decoration: none;
  flex: 1;
`;

const Wrapper = styled.div`
  display: grid;
  margin: 120px 24px;
  gap: 24px;
  grid-template-areas:
     "app app"
     "web  web"
     "graph  graph";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill ,250px);

  @media screen and (min-width: 768px) {
    margin: 120px 40px;
    grid-template-rows: repeat( auto-fill ,200px);
  }
  @media screen and (min-width: 1024px) {
    margin: 120px 0;
  ${(props) => {
    if (props.main) {
      return css`
        grid-template-areas:
          "web  app"
          "web graph";
      `;
    } else {
      return css`
        display: flex;
      `;
    }
  }}
   


`;

export default DesignLinkList;
