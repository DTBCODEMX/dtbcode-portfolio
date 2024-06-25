import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme, highContrastTheme } from './theme';

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState('light'); // o 'dark' o 'highContrast'

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => {
    if (mode === 'light') return lightTheme;
    if (mode === 'dark') return darkTheme;
    return highContrastTheme;
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
