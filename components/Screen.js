import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Appearance,
} from 'react-native';
import React from 'react';
import * as Device from 'expo-device';
import colors from '../config/colors';

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Appearance.getColorScheme() === 'dark' ? 'white' : 'black',
  },
  container: {
    flex: 1,
    minHeight: '100%',
  },
});
