import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import Screen from '../components/Screen';
import LogoSvg from '../components/LogoSvg';
import colors from '../config/colors';

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.container}></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headbar: {
    backgroundColor: colors.secondary,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
