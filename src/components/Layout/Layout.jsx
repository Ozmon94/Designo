import React from "react";
import styled from "styled-components";
import Navigation from "components/Navigation/Navigation";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <Wrapper>
      <Navigation />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = ["/locations"];
          return paths.includes(location.pathname)
            ? location.pathname
            : location.key;
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ContentWrapper = styled.div``;

export default Layout;
