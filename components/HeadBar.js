import { StatusBar, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import LogoSvg from './LogoSvg';
import colors from '../config/colors';
import DrawerToggleButton from './DrawerToggleButton';

export default function HeadBar({ onPress }) {
  return (
    <View style={styles.headbar}>
      <View style={styles.toggleButton}>
        <DrawerToggleButton onPress={onPress} />
      </View>
      <View style={styles.logo}>
        <LogoSvg height={100} width={100} style={{ top: 20 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headbar: {
    backgroundColor: colors.secondary,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  toggleButton: {
    top: 30,
  },
  logo: {
    marginLeft: 60,
  },
});
