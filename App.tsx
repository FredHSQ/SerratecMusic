
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { Routes } from './src/routes/routes';

const App = () => {

  return (
    <SafeAreaView style={{backgroundColor: 'red',flex:1}}>
      <StatusBar barStyle={'light-content'} />
      <Routes/>
    </SafeAreaView>
  );
};

export default App;
