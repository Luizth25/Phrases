import { DefaultTheme } from "styled-components";

type TFontStyleProps = {
  fontSize: number;
  fontWeight: number;
};

type TThemeFontStyles = {
  [key in "title" | "paragraph"]: TFontStyleProps;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof themeColors;
    fontStyles: typeof themeFontStyles;
  }
}

const themeColors = {
  componentColor: "#1f1f1f",
  fontColor: "#efefef",
  headerBgColor: "#0D0D0D",
  background: "#1A1919",
};

const themeFontStyles: TThemeFontStyles = {
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
