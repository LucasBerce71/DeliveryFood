import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { theme } from './src/global/styles';

import { SignIn } from './src/screens/SignIn';
import { SignUp } from './src/screens/SignUp';

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <SignUp />
    </PaperProvider>
  );
}

export default App;