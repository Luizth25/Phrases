import Navigate from "components/Navigate";

import { MainContainer } from "./styles";

const Main = (): JSX.Element => (
  <MainContainer>
    <h3>Make a choice for your phrase of the day.</h3>
    <p>It's your choice!!</p>
    <Navigate />
  </MainContainer>
);

export default Main;
