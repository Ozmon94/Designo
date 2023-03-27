import React from "react";
import HomeHero from "components/HomeHero/HomeHero";
import DesignLinkList from "components/DesignLinkList/DesignLinkList";
import CoreValues from "components/CoreValues/CoreValues";
import Footer from "components/Footer/Footer";
import PageWrapper from "components/PageWrapper";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <HomeHero />
        <DesignLinkList />
        <CoreValues />{" "}
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Home;
