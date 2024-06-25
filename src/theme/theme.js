import { createTheme } from '@mui/material/styles';

// Define el tema claro
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f0f0f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#03dac6',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontWeightBold: 700,
  },
});

// Define el tema oscuro
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontWeightBold: 700,
  },
});

// Define el tema de alto contraste
const highContrastTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffcc00',
    },
    primary: {
      main: '#ffcc00',
    },
    secondary: {
      main: '#ffcc00',
    },
    error: {
      main: '#ff0033',
    },
    warning: {
      main: '#ffcc00',
    },
    info: {
      main: '#33ccff',
    },
    success: {
      main: '#00cc66',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 16,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#ffcc00',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#ffcc00',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#ffcc00',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#ffcc00',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#ffcc00',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      color: '#ffcc00',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#ffffff',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#ffffff',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
      color: '#000000',
      backgroundColor: '#ffcc00',
      '&:hover': {
        backgroundColor: '#e6b800',
      },
    },
  },
});

export { lightTheme, darkTheme, highContrastTheme };
