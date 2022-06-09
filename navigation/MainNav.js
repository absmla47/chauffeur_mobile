import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from '../views/LoginScreen';
import MainScreen from '../views/MainScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const MainNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
