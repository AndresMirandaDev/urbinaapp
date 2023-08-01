import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
          Developed by Ak
          <AppText
            style={{
              fontSize: 15,
              color: '#ff9f40',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          >
            l
          </AppText>
          ass
        </AppText>
        <MaterialCommunityIcons name="copyright" />
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 15,
    marginRight: 5,
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
