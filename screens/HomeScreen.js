import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import Screen from '../components/Screen';
import LogoSvg from '../components/LogoSvg';
import colors from '../config/colors';
import AppText from '../components/AppText';
import WelcomeMessage from '../components/homescreen/WelcomeMessage';
import VisitInfo from '../components/homescreen/VisitInfo';

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <WelcomeMessage />
      </View>
      <View style={styles.content}>
        <VisitInfo />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  content: {
    flex: 1,
    height: 100,
    borderRadius: 30,
    bottom: 30,
  },
});
