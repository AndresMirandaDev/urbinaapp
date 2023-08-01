import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppText from '../components/AppText';
import LogoSvg from '../components/LogoSvg';
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.jpeg')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <LogoSvg width={300} height={200} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Iniciar Sesion" />
      </View>
      <View style={styles.copyright}>
        <AppText style={styles.copyrightText}>
          Developed by <AppText>Aklass</AppText>
        </AppText>
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
    width: '70%',
  },
  copyright: {
    marginTop: 10,
  },
  copyrightText: {
    fontSize: 15,
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    margin: 10,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
