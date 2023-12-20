import { createTheme } from "@mui/material";

const palette = {
  primary: {
    main: "#e13639",
    contrastText: "#2d2d2c",
  },
  secondary: {
    main: "#e13639",
    contrastText: "#2d2d2c",
  },
  background: {
    default: "#ffffff",
    paper: "#fffffa",
  },
};


const components = {
  MuiDrawer: {
    styleOverrides: {
      paper: { background: palette.primary.main},
    }
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 360,
    md: 906,
    lg: 1920,
    xl: 2080,
  },
};

const Theme = createTheme({
  palette,
  components,
  breakpoints,
  typography: {
    allVariants: {
      color: '#fff',
    },
    fontFamily: 'Inter',
    h1: {
      fontWeight: 600,
      fontSize: 57,
      letterSpacing: -0.25,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '45px',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: 45,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '36px',
      },
    },
    h3: {
      fontWeight: 600,
      lineHeight: '44px',
      fontSize: 36,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '28px',
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: 32,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '24px',
      },
    },
    h5: {
      fontWeight: 500,
      fontSize: 28,
      [`@media (max-width:${breakpoints.values.md}px)`]: {
        fontSize: '16px',
      },
    },
  }
});

export default Theme;
