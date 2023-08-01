import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import * as Device from 'expo-device';

import AppText from '../AppText';
import colors from '../../config/colors';
import appStyles from '../../config/styles';

export default function WelcomeMessage() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <AppText style={[appStyles.heading, styles.welcome]}>
          Bienvenido
        </AppText>
        <AppText style={[appStyles.heading, styles.username]}>Usuario</AppText>
      </View>
      <View>
        {Device.osName === 'iOS' && (
          <LottieView
            source={require('../../assets/animations/hellolottie.json')}
            autoPlay
            loop
            style={{ height: 100, width: 100 }}
            speed={0.5}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    color: colors.secondary,
    fontSize: 30,
    paddingLeft: 10,
  },
  welcomeContainer: {
    marginRight: 40,
  },
  welcome: {
    color: colors.light,
  },
});
