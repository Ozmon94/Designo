import React from "react";
import styled from "styled-components";
import circles from "assets/shared/desktop/bg-pattern-call-to-action.svg";
import Button from "components/Button/Button";
import logoWhite from "assets/shared/desktop/logo-light.png";
import { ReactComponent as Facebook } from "assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Youtube } from "assets/shared/desktop/icon-youtube.svg";
import { ReactComponent as Twitter } from "assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Pinterest } from "assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as Instagram } from "assets/shared/desktop/icon-instagram.svg";
import { Link, useNavigate } from "react-router-dom";
const Footer = ({ contact = true }) => {
  const navigate = useNavigate();
  const redirectToContact = () => {
    navigate("/contact");
  };
  return (
    <Wrapper>
      <CallToActionWrapper isVisable={contact}>
        <CallToAction url={circles}>
          <div>
            <CallToActionHeading>
              Let’s talk about <br /> your project
            </CallToActionHeading>
            <CallToActionParagraph>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </CallToActionParagraph>
          </div>
          <Button dark onClick={redirectToContact}>
            Get in touch
          </Button>
        </CallToAction>
      </CallToActionWrapper>

      <FooterWrapper>
        <FooterNavigationWrapper>
          <ImageWrapper>
            <LogoImage src={logoWhite} alt="Designo Logo" />
          </ImageWrapper>
          <FooterNavigation>
            <FooterLink to="/about">Our company</FooterLink>
            <FooterLink to="/locations">Locations</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterNavigation>
        </FooterNavigationWrapper>
        <FooterContactWrapper>
          <ContactElement>
            <b>Designo Central Office </b> <br />
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </ContactElement>
          <ContactElement>
            <b>Contact Us (Central Office) </b>
            <br />
            P : +1 253-863-8967 <br />M : contact@designo.co
          </ContactElement>
          <SocialLinkWrapper>
            <SocialLink to="#">
              <Facebook />
            </SocialLink>
            <SocialLink to="#">
              <Youtube />
            </SocialLink>
            <SocialLink to="#">
              <Twitter />
            </SocialLink>
            <SocialLink to="#">
              <Pinterest />
            </SocialLink>
            <SocialLink to="#">
              <Instagram />
            </SocialLink>
          </SocialLinkWrapper>
        </FooterContactWrapper>
      </FooterWrapper>
    </Wrapper>
  );
};

const FooterContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: unset;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 20px;
  }
`;

const FooterNavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 20px 40px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const SocialLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: transparent;
`;

const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const ContactElement = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  white-space: nowrap;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
`;

const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 42px;
  }
`;

const LogoImage = styled.img`
  width: 202px;
`;

const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px;

  @media screen and (min-width: 768px) {
    padding: 64px 40px;
  }

  @media screen and (min-width: 1024px) {
    padding: 64px 0;
    width: 100%;
  }
`;

const CallToActionWrapper = styled.div`
  display: ${(props) => (props.isVisable ? "block" : "none")};
  background: linear-gradient(
    transparent 50%,
    ${(props) => props.theme.colors.black} 50%
  );
  @media screen and (min-width: 376px) {
    background: linear-gradient(
      transparent 75%,
      ${(props) => props.theme.colors.black} 75%
    );
  }
  @media screen and (min-width: 1024px) {
    padding: 0 20px;
  }
`;
const CallToActionParagraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 32px;
`;

const CallToActionHeading = styled.h2`
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0;
  margin-bottom: 6px;
  @media screen and (min-width: 376px) {
    margin-bottom: 10px;
  }
`;

const CallToAction = styled.div`
  background: url(${(props) => props.url}) no-repeat center left 45%,
    linear-gradient(
      ${(props) => props.theme.colors.peach},
      ${(props) => props.theme.colors.peach}
    );

  margin: 0 24px;
  padding: 64px 24px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 57px 60px;
    margin: 0 40px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    margin: 0 auto;
    flex-direction: row;
    text-align: left;
    div {
      width: 60%;
    }
    button {
      margin-left: auto;
    }
  }
`;

const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.white};
  height: 100%;
`;

export default Footer;
