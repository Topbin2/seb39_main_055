/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

import {
  Category,
  Header,
  HotPlace,
  Pick,
  Recommend,
  Review,
  SearchBar,
} from "../../components";

const Container = styled.div`
  min-height: inherit;
  padding-top: 700px;

  & > section {
    display: flex;
    flex-direction: column;
    gap: 300px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    & > section {
      gap: 100px;
      padding: 0 20px;
    }
  }
`;
const Main = () => {
  return (
    <Container>
      <Header />
      <section>
        <SearchBar />
        <Category />
        {[<Recommend />, <HotPlace />, <Pick />, <Review />].map(
          (component, idx) => (
            <Fade key={idx} direction="left">
              {component}
            </Fade>
          )
        )}
      </section>
    </Container>
  );
};

export default Main;
