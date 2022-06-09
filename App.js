import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './navigation/MainNav';
import {Provider} from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <MainNav />
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
