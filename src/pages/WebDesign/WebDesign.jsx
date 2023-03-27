import React from "react";
import Hero from "components/Hero/Hero";
import DesignCard from "components/DesignCard/DesignCard";
import express from "assets/web-design/desktop/image-express.jpg";
import transfer from "assets/web-design/desktop/image-transfer.jpg";
import photon from "assets/web-design/desktop/image-photon.jpg";
import builder from "assets/web-design/desktop/image-builder.jpg";
import blogr from "assets/web-design/desktop/image-blogr.jpg";
import camp from "assets/web-design/desktop/image-camp.jpg";

import DesignLinkList from "components/DesignLinkList/DesignLinkList";
import Footer from "components/Footer/Footer";
import styled from "styled-components";
import PageWrapper from "components/PageWrapper";

const WebDesign = () => {
  return (
    <>
      <PageWrapper>
        <Hero
          title="Web design"
          description=" We build websites that serve as
      powerful marketing tools and bring memorable brand experiences."
        />
        <DesignCardList>
          <DesignCard
            title="Express"
            description="A multi-carrier shipping website for ecommerce businesses"
            url={express}
          />
          <DesignCard
            title="Transfer"
            description="Site for
      low-cost money transfers and sending money within seconds"
            url={transfer}
          />
          <DesignCard
            title="Photon"
            description="A state-of-the-art music player with high-resolution audio and DSP effects
       "
            url={photon}
          />
          <DesignCard
            title=" Builder"
            description="Connects users with local contractors based on their location"
            url={builder}
          />
          <DesignCard
            title="Blogr"
            description="Blogr is a platform for creating an online blog or publication
     "
            url={blogr}
          />
          <DesignCard
            title=" Camp"
            description=" Get expert training in coding, data, design, and digital marketing"
            url={camp}
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
    gap: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default WebDesign;
