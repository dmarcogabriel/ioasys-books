import React from 'react';
import {ThemeProvider as SCThemeProvider} from 'styled-components/native';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps): JSX.Element => {
  const theme = {
    colors: {
      primary: '#B22E6F',
      dark: '#333333',
      light: '#ffffff',
      grey: '#999999',
    },
  };

  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
