import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserProvider, ThemeProvider, ErrorProvider} from './contexts';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';

import {Routes} from './Routes';

export const App = () => (
  <>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <UserProvider>
        <ErrorProvider>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </ErrorProvider>
      </UserProvider>
    </NavigationContainer>
    <Toast />
  </>
);
