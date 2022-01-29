import { createTheme } from "@mui/material/styles";
import { lightShadows, darkShadows } from "./shadows";
import { csCZ } from "@mui/material/locale";
export const THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK",
  NATURE: "NATURE",
};

const themesOptions = {
  [THEMES.LIGHT]: {
    overrides: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            "&::placeholder": {
              opacity: 0.86,
              color: "#42526e",
            },
          },
        },
      },
    },
    palette: {
      action: {
        active: "#6b778c",
      },
      background: {
        default: "#F7F7FC",
        paper: "#ffffff",
      },
      error: {
        contrastText: "#ffffff",
        main: "#f44336",
      },
      mode: "light",
      primary: {
        contrastText: "#ffffff",
        main: "#5664d2",
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50",
      },
      text: {
        primary: "#172b4d",
        secondary: "#6b778c",
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800",
      },
    },
    shadows: lightShadows,
  },
  [THEMES.DARK]: {
    overrides: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
          },
        },
      },
    },
    palette: {
      background: {
        default: "#171c24",
        paper: "#222b36",
      },
      divider: "rgba(145, 158, 171, 0.24)",
      error: {
        contrastText: "#ffffff",
        main: "#f44336",
      },
      mode: "dark",
      primary: {
        contrastText: "#ffffff",
        main: "#688eff",
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50",
      },
      text: {
        primary: "#ffffff",
        secondary: "#919eab",
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800",
      },
    },
    shadows: darkShadows,
  },
  [THEMES.NATURE]: {
    overrides: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
          },
        },
      },
    },
    palette: {
      background: {
        default: "#1c2531",
        paper: "#293142",
      },
      divider: "rgba(145, 158, 171, 0.24)",
      error: {
        contrastText: "#ffffff",
        main: "#f44336",
      },
      mode: "dark",
      primary: {
        contrastText: "#ffffff",
        main: "#01ab56",
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50",
      },
      text: {
        primary: "#ffffff",
        secondary: "#919eab",
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800",
      },
    },
    shadows: darkShadows,
  },
};

export const theme = createTheme(
  {
    components: {
      MuiAppBar: {
        defaultProps: {
          style: {
            background: "#FCFCFC",
            color: "black",
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          fallback: {
            height: "75%",
            width: "75%",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          contained: {
            boxShadow: "0px 16px 24px rgba(86, 100, 210, 0.3)",
            ":hover": {
              boxShadow: "0px 16px 24px rgba(86, 100, 210, 0.38)",
            }
          },
          root: {
            textTransform: "none",
            borderRadius: ".5rem",
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 40,
            paddingLeft: 40,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          "*": {
            boxSizing: "border-box",
          },
          html: {
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
            height: "100%",
            width: "100%",
          },
          body: {
            height: "100%",
          },
          "#root": {
            height: "100%",
          },
          "#nprogress .bar": {
            zIndex: "2000 !important",
          },
        },
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: {
            variant: "h6",
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: 3,
            overflow: "hidden",
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: "auto",
            marginRight: "16px",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
    typography: {
      button: {
        fontWeight: 600,
        textTransform: "none",
        fontSize: "1rem"
      },
      fontFamily: '"SofiaPro", sans-serif',
      h1: {
        fontWeight: 600,
        fontSize: "3.5rem",
      },
      h2: {
        fontWeight: 600,
        fontSize: "3rem",
      },
      h3: {
        fontWeight: 600,
        fontSize: "2.25rem",
      },
      h4: {
        fontWeight: 600,
        fontSize: "2rem",
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.5rem",
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.125rem",
      },
      overline: {
        fontWeight: 600,
      },
    },
    props: {
      MuiCardContent: {
        style: {
          padding: "2rem",
        },
      },
    },
    shadows: lightShadows,
    direction: "ltr",
    ...themesOptions["LIGHT"],
  },
  csCZ
);
