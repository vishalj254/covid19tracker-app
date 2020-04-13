/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import {StatusBar} from 'react-native';

import MainStackNavigation from './components/MainStackNavigation';

function App() {
  console.disableYellowBox = true;
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <MainStackNavigation />
    </>
  );
}

export default App;
