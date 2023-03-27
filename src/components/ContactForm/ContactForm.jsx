import React, { useState } from "react";
import InputField from "components/InputField/InputField";
import styled from "styled-components";
import TextAreaField from "components/TextAreaField/TextAreaField";
import mobilePattern from "assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";
import desktopPattern from "assets/contact/desktop/bg-pattern-hero-desktop.svg";
import Button from "components/Button/Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { error, setError } = useState({});
  return (
    <Wrapper mobileURL={mobilePattern} desktopURL={desktopPattern}>
      <InfoWrapper>
        <Header>Contact us</Header>
        <Paragraph>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </Paragraph>
      </InfoWrapper>
      <Form>
        <InputField
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error?.name}
          required
        />
        <InputField
          placeholder="Email address"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error?.email}
          required
        />
        <InputField
          placeholder="Phone"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={error?.phone}
        />
        <TextAreaField
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          error={error?.message}
          id="message"
          required
        />
        <Button dark>Submit</Button>
      </Form>
    </Wrapper>
  );
};

const InfoWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex: 1 1 60%;
    flex-direction: column;
    padding-right: 60px;
  }
`;

const Wrapper = styled.div`
  background: url(${(props) => props.mobileURL}) top left 25%,
    linear-gradient(
      ${(props) => props.theme.colors.peach},
      ${(props) => props.theme.colors.peach}
    );
  padding: 72px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    background: url(${(props) => props.desktopURL}) no-repeat -120px -90px,
      linear-gradient(
        ${(props) => props.theme.colors.peach},
        ${(props) => props.theme.colors.peach}
      );
    margin: 0 40px;
    border-radius: 15px;
    padding: 71px 58px;
    align-items: flex-start;
  }
  @media screen and (min-width: 1024px) {
    background-position: bottom left;

    margin: 0;
    flex-direction: row;
    padding: 54px 96px;
    align-items: center;
  }
`;

const Header = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 32px;
  }
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    text-align: left;
    margin-bottom: 40px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  @media screen and (min-width: 768px) {
    align-items: flex-end;
  }
  @media screen and (min-width: 1024px) {
    flex: 1 1 40%;
  }
`;

export default ContactForm;
