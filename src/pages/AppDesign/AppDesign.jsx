import React from "react";
import styled from "styled-components";
import Hero from "components/Hero/Hero";
import DesignCard from "components/DesignCard/DesignCard";
import mobileBackground from "assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";
import airfilter from "assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "assets/app-design/desktop/image-eyecam.jpg";
import faceit from "assets/app-design/desktop/image-faceit.jpg";
import todo from "assets/app-design/desktop/image-todo.jpg";
import loopstudions from "assets/app-design/desktop/image-loopstudios.jpg";
import Footer from "components/Footer/Footer";
import DesignLinkList from "components/DesignLinkList/DesignLinkList";
import PageWrapper from "components/PageWrapper";

const AppDesign = () => {
  return (
    <>
      <PageWrapper>
        <Hero
          url={mobileBackground}
          title="App design"
          description="Our mobile designs bring
      intuitive digital solutions to your customers right at their fingertips."
        />
        <DesignCardList>
          <DesignCard
            title=" Airfilter"
            description="Solving the problem of poor indoor air quality by filtering the
      air"
            url={airfilter}
          />
          <DesignCard
            title="Eyecam"
            description=" Product that lets you edit your favorite photos and videos at
      any time"
            url={eyecam}
          />
          <DesignCard
            title="Faceit"
            description="Get to meet your favorite internet superstar with the
      faceit app"
            url={faceit}
          />
          <DesignCard
            title=" Todo"
            description="A todo app that features cloud sync with light and dark
      mode"
            url={todo}
          />
          <DesignCard
            title=" Loopstudios"
            description="A VR experience app made for Loopstudios"
            url={loopstudions}
          />
        </DesignCardList>
        <DesignLinkList />
      </PageWrapper>
      <Footer />
    </>
  );
};

const DesignCardList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 96px 24px;
  gap: 40px;
  @media screen and (min-width: 768px) {
    margin: 96px 40px;
  }

  @media screen and (min-width: 1024px) {
    margin: 96px auto;
    flex-direction: row;
    gap: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default AppDesign;
