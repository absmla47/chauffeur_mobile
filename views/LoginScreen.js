import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {Button, Input, Text} from '@ui-kitten/components';
const LoginScreen = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Main');
  };
  return (
    <View style={globalStyles.container}>
      <View style={styles.mainContainer}>
        <Input
          placeholder="Email"
          style={styles.inputStyle}
          label="Email"
          // value={value}
          // onChangeText={nextValue => setValue(nextValue)}
        />
        <Input
          placeholder="Mot de passe"
          style={styles.inputStyle}
          secureTextEntry={true}
          label="Mot de passe"
          // value={value}
          // onChangeText={nextValue => setValue(nextValue)}
        />
        <Button style={styles.btnStyle} onPress={handleLogin}>
          Se Connecter
        </Button>
        <View style={styles.fogotPassword}>
          <Text>Mot de passe oublié ?</Text>
          <TouchableOpacity>
            <Text style={styles.forgotBtn}>Cliquez Ici</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 20,
    flex: 1,
  },
  inputStyle: {
    marginVertical: 30,
    height: 20,
  },
  btnStyle: {
    marginTop: 30,
    width: '80%',
  },
  fogotPassword: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotBtn: {
    color: 'blue',
    fontWeight: '600',
    marginLeft: 10,
  },
});
