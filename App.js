/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
 // import BaseNav  from './component/BaseNav';
import MainTabNavigator from './navigator/MainTabNavgator';
const App: () => React$Node = () => {
  return (
      <MainTabNavigator/>
  )
};

const styles = StyleSheet.create({

});

export default App;
