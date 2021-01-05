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
import {Provider} from 'mobx-react';
import RootStore from './mobx';

const App: () => React$Node = () => {
  return (
      <Provider RootStore={RootStore}>
   
        <MainTabNavigator/>
  </Provider>
  
  )
};

const styles = StyleSheet.create({

});

export default App;
