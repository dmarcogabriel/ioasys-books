import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserProvider, ThemeProvider} from './contexts';
import {StatusBar} from 'react-native';

import {Routes} from './Routes';

export const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <UserProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </UserProvider>
  </NavigationContainer>
);
