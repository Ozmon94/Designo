import React from "react";
import AboutUsHero from "components/AboutUsHero/AboutUsHero";
import AboutCard from "components/AboutCard/AboutCard";
import wordClassMobile from "assets/about/mobile/image-world-class-talent.jpg";
import wordClassTablet from "assets/about/tablet/image-world-class-talent.jpg";
import wordClassDesktop from "assets/about/desktop/image-world-class-talent.jpg";
import realDealMobile from "assets/about/mobile/image-real-deal.jpg";
import realDealTablet from "assets/about/tablet/image-real-deal.jpg";
import realDealDesktop from "assets/about/desktop/image-real-deal.jpg";
import CountryList from "CountryList/CountryList";
import Footer from "components/Footer/Footer";
import PageWrapper from "components/PageWrapper";

const About = () => {
  return (
    <>
      <PageWrapper>
        <AboutUsHero />
        <AboutCard
          mobileImage={wordClassMobile}
          tabletImage={wordClassTablet}
          desktopImage={wordClassDesktop}
          title="World-class talent"
          firstParagraph="We are a crew of strategists, problem-solvers, and technologists. Every
      design is thoughtfully crafted from concept to launch, ensuring success in
      its given market. We are constantly updating our skills in a myriad of
      platforms."
          secondParagraph="Our team is multi-disciplinary and we are not merely interested in form —
      content and meaning are just as important. We give great importance to
      craftsmanship, service, and prompt delivery. Clients have always been
      impressed with our high-quality outcomes that encapsulates their brand’s
      story and mission. "
        />
        <CountryList />
        <AboutCard
          left
          mobileImage={realDealMobile}
          tabletImage={realDealTablet}
          desktopImage={realDealDesktop}
          title="The real deal"
          firstParagraph="As strategic partners in our clients’ businesses, we are ready to take on
      any challenge as our own. Solving real problems require empathy and
      collaboration, and we strive to bring a fresh perspective to every
      opportunity. We make design and technology more accessible and give you
      tools to measure success."
          secondParagraph="We are visual storytellers in appealing and captivating ways. By combining
      business and marketing strategies, we inspire audiences to take action and
      drive real results."
        />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default About;
