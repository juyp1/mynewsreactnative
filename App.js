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
import store from './mobx';

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
   
        <MainTabNavigator/>
  </Provider>
  
  )
};

const styles = StyleSheet.create({

});

export default App;
