import { useState } from "react";

import EventButton from "../../components/EventButton";
import Header from "../../components/Header";
import HomeButton from "../../components/HomeButton";
import { PhilosophyApi } from "../../services/api";
import { Container } from "./styles";
import { TPhraseProps } from "../../types/";
import { RawPhilosophyProps } from "./type";

const Philosophy = () => {
  const [philosophy, setPhilosophy] = useState<TPhraseProps>();

  const getPhilosophy = () => {
    PhilosophyApi.get<RawPhilosophyProps>("/")
      .then((response) =>
        setPhilosophy({
          value: response.data.quote,
        })
      )
      .catch((err) => err);
  };

  return (
    <>
      <Header
        title="Philosophy"
        image="https://i.giphy.com/media/UuGmK0kcUPtMIEbHr4/200w.gif"
      />
      <HomeButton />
      <Container>
        <EventButton
          onClick={getPhilosophy}
          title={"phrase"}
          value={philosophy?.value ?? ""}
        />
      </Container>
    </>
  );
};
export default Philosophy;
