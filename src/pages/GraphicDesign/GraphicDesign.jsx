import React from "react";
import Hero from "components/Hero/Hero";
import mobileBackground from "assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";
import DesignCard from "components/DesignCard/DesignCard";
import change from "assets/graphic-design/desktop/image-change.jpg";
import boxedWater from "assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "assets/graphic-design/desktop/image-science.jpg";

import DesignLinkList from "components/DesignLinkList/DesignLinkList";
import Footer from "components/Footer/Footer";
import styled from "styled-components";
import PageWrapper from "components/PageWrapper";

const GraphicDesign = () => {
  return (
    <>
      <PageWrapper>
        <Hero
          url={mobileBackground}
          title="Graphic design"
          description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        />
        <DesignCardList>
          <DesignCard
            title=" Tim Brown"
            description="A book cover designed for Tim Brown’s new release, ‘Change’"
            url={change}
          />
          <DesignCard
            title="Boxed water"
            description="A simple packaging concept made for Boxed Water"
            url={boxedWater}
          />
          <DesignCard
            title="Science!"
            description="A poster made in collaboration with the Federal Art Project"
            url={science}
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
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default GraphicDesign;
