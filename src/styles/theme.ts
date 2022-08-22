import { DefaultTheme } from "styled-components";

type TFontStyle = {
  fontSize: number;
  fontWeight: number;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string };
    fontStyles: { [key in keyof typeof themeFontStyles]: TFontStyle };
  }
}

const themeColors = {
  componentColor: "#1f1f1f",
  fontColor: "#efefef",
  headerBgColor: "#0D0D0D",
  backgroud: "#1A1919",
};

const themeFontStyles = {
  title: {
    fontSize: 40,
    fontWeight: 500,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 400,
  },
};

const theme: DefaultTheme = {
  colors: themeColors,
  fontStyles: themeFontStyles,
};

export default theme;
