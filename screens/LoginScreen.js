import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import LogoSvg from '../components/LogoSvg';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppText from '../components/AppText';
import appStyles from '../config/styles';
import colors from '../config/colors';
import SubmitButton from '../components/forms/SubmitButton';

export default function LoginScreen() {
  const handleSubmit = () => {
    console.log('submit pressed');
  };
  return (
    <ImageBackground
      source={require('../assets/background.jpeg')}
      resizeMode="cover"
      style={styles.background}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <LogoSvg width={200} height={200} />
      </View>

      <View style={styles.loginForm}>
        <AppForm
          initialValues={{
            name: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          <AppFormField name="name" placeholder="Nombre" icon="account" />
          <AppFormField name="password" placeholder="Contraseña" icon="lock" />
          <View style={styles.buttonContainer}>
            <SubmitButton title="Iniciar sesión" />
          </View>
        </AppForm>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    margin: 5,
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30,
  },
});
