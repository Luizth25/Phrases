import { useState } from "react";

import EventButton from "components/EventButton";
import HomeButton from "components/HomeButton";
import Header from "components/Header";
import { api, advicesPath } from "services/api";
import { TPhraseProps } from "types";

import { Container } from "./styles";
import { RawAdvicesProps } from "./type";

const Advices: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}): JSX.Element => {
  const [advices, setAdvices] = useState<TPhraseProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAdvices = () => {
    setIsLoading(true);

    api
      .get<RawAdvicesProps>(`${advicesPath}/advice`)
      .then((response) =>
        setAdvices({
          value: response.data.slip.advice,
        })
      )
      .catch((err) => err)
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Header
        title="Advice"
        image="https://64.media.tumblr.com/43a1e8204f611fc2f9ffd9eccc7a455e/tumblr_mwno2t6dys1rfjowdo1_500.gif"
        {...rest}
      />
      <HomeButton />
      <Container>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <EventButton
            onClick={getAdvices}
            title="phrase"
            value={advices?.value ?? ""}
          />
        )}
      </Container>
    </>
  );
};
export default Advices;
