import { useState } from "react";

import EventButton from "../../components/EventButton";
import HomeButton from "../../components/HomeButton";
import Header from "../../components/Header";
import { AdviceApi } from "../../services/api";
import { Container } from "./styles";
import { TPhraseProps } from "../../types/";
import { RawAdvicesProps } from "./type";

const Advices = () => {
  const [advices, setAdvices] = useState<TPhraseProps>();

  const getAdvices = () => {
    AdviceApi.get<RawAdvicesProps>("/advice")
      .then((response) =>
        setAdvices({
          value: response.data.slip.advice,
        })
      )
      .catch((err) => err);
  };

  return (
    <>
      <Header
        title="Advice"
        image="https://64.media.tumblr.com/43a1e8204f611fc2f9ffd9eccc7a455e/tumblr_mwno2t6dys1rfjowdo1_500.gif"
      />
      <HomeButton />
      <Container>
        <EventButton
          onClick={getAdvices}
          title={"phrase"}
          value={advices?.value ?? ""}
        />
      </Container>
    </>
  );
};
export default Advices;
