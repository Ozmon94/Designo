import styled from "styled-components";

const PageWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    padding: 0 20px;
  }
`;

export default PageWrapper;
