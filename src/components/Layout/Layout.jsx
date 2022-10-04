import React from "react";
import styled from "styled-components";
import Navigation from "components/Navigation/Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Wrapper>
      <Navigation />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ContentWrapper = styled.div``;

export default Layout;
