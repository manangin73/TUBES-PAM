import { View, Text } from 'react-native'
import React, { useState } from 'react';
import Navigasi from './src/Navigasi'
import useFonts from './useFont'
import AppLoading from 'expo-app-loading';

const App = () => {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }
  return (
    
    <Navigasi/>
  )
}

export default App