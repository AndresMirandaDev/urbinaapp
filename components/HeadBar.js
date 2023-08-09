import { StatusBar, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import LogoSvg from './LogoSvg';
import colors from '../config/colors';
import DrawerToggleButton from './DrawerToggleButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

export default function HeadBar({ onPress }) {
  return (
    <View style={styles.headbar}>
      <View style={styles.toggleButton}>
        <DrawerToggleButton onPress={onPress} />
      </View>
      <View style={styles.logo}>
        <LogoSvg height={100} width={100} style={{ top: 20 }} />
      </View>
      <View style={styles.alertButton}>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log('alert button pressed');
          }}
        >
          <MaterialCommunityIcons name="bell" size={30} color={colors.light} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alertButton: {
    alignItems: 'center',
    marginLeft: 90,
    top: 20,
  },
  headbar: {
    backgroundColor: colors.secondary,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  toggleButton: {
    top: 20,
  },
  logo: {
    marginLeft: 70,
  },
});
