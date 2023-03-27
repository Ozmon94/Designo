import React from "react";
import ContactForm from "components/ContactForm/ContactForm";
import CountryList from "CountryList/CountryList";
import Footer from "components/Footer/Footer";
import PageWrapper from "components/PageWrapper";

const Contact = () => {
  return (
    <>
      <PageWrapper>
        <ContactForm />
        <CountryList />{" "}
      </PageWrapper>
      <Footer contact={false} />
    </>
  );
};

export default Contact;
