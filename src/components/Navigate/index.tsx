import { Link } from "react-router-dom";

import Button from "../Button";
import Paragraph from "../Paragraph";
import { NavContainer } from "./styles";

const Navigate = () => {
  return (
    <NavContainer>
      <Paragraph paragraph="You can hear a truth about Chuck Norris" />
      <Link to="/jokes">
        <Button text="Truth" />
      </Link>
      <br />
      <Paragraph paragraph="A Advices phrase for your day" />
      <Link to="/advices">
        <Button text="Advices" />
      </Link>
      <br />
      <Paragraph paragraph="And a phrase from the great philosopher of 2021" />
      <Link to="/philosophy">
        <Button text="Philosofia" />
      </Link>
    </NavContainer>
  );
};

export default Navigate;
