import {DefaultTheme} from 'styled-components/native';

export interface ThemeProps extends DefaultTheme {
  theme: {
    colors: {
      primary: string;
      dark: string;
      light: string;
      grey: string;
    };
  };
}
