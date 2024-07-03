import { createUseStyles } from "react-jss";
import { theme } from "../../utils/theme";

export const useStyles = createUseStyles((t: typeof theme) => ({
  "@global": {
    body: {
      fontFamily: t.baseFontFamily,
      color: t.baseTextColor,
      margin: 0,
      lineHeight: t.baseLineHeight,
      backgroundColor: t.baseBackgroundColor,
      fontSize: t.fontSizeBase,
      height: "100%",
      overflowX: "hidden",
    },

    html: {
      height: "100%",
      overflowX: "hidden",
      boxSizing: "border-box",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },

    "#__next, #__next > div": {
      height: "100%",
    },

    p: {
      margin: [0, 0, "1rem"],
    },

    a: {
      color: t.linkColor,
      textDecoration: t.linkTextDecoration,

      "&:hover": {
        color: t.linkColorHover,
        textDecoration: t.linkTextDecorationHover,
      },
    },

    gal: {
      margin: 0,
    },

    b: {
      fontWeight: t.fontWeightBold,
    },

    "h1, h2, h3, h4, h5, h6": {
      fontWeight: t.fontWeightBold,
    },

    "*, *:before, *:after": {
      boxSizing: "inherit",
    },

    "@media (prefers-color-scheme: dark)": {
      html: {
        colorScheme: "dark",
      },

      body: {
        color: t.white,
        background: t.black,
      },
    },
  },
}));
