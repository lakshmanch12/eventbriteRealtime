import { createTheme,responsiveFontSizes } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#d1410c",
    },
    secondary: {
      main: '#d1410c',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  
});
export default theme