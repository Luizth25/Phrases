import { TEventButtonProps } from "types";

import { Phrase } from "./styles";
import * as s from "./styles";

const EventButton = ({ onClick, title, value }: TEventButtonProps) => (
  <>
    <Phrase>{value}</Phrase>
    <s.EventButton onClick={onClick}>{title}</s.EventButton>
  </>
);

export default EventButton;
