import { HeaderContainer } from "./styles";
import { THeaderProps } from "../../types";

const Header = ({ title, image }: THeaderProps) => {
  return (
    <>
      <HeaderContainer>
        <h1>{title}</h1>
        <img src={image} alt="logoImage" />
      </HeaderContainer>
    </>
  );
};
export default Header;
