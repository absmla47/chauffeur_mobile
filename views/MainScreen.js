import {StyleSheet, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {Text} from '@ui-kitten/components';

const MainScreen = () => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Liste des messions</Text>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  header: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',

    height: 60,
    borderColor: 'rgba(32, 32, 32, 0.2)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
