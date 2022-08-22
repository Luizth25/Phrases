import Button from "../Button";
import { HomeLink } from "./styled";

const HomeButton = () => {
  return (
    <HomeLink to="/">
      <Button text="Home" />
    </HomeLink>
  );
};
export default HomeButton;
