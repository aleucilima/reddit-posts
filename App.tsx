import React from 'react';
import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';

LogBox.ignoreAllLogs();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
