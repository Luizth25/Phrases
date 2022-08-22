import * as s from "./styles";
import { TButtonProps } from "../../types";

const Button = ({ text }: TButtonProps) => {
  return (
    <>
      <s.Button>{text}</s.Button>
    </>
  );
};

export default Button;
