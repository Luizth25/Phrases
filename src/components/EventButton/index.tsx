import { Phrase } from "./styles";
import * as s from "./styles";
import { TEventButtonProps } from "../../types";

const EventButton = ({ onClick, title, value }: TEventButtonProps) => (
  <>
    <Phrase>{value}</Phrase>
    <s.EventButton onClick={onClick}>{title}</s.EventButton>
  </>
);

export default EventButton;
