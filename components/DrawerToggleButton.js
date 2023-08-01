import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDrawerStatus } from '@react-navigation/drawer';
import colors from '../config/colors';

export default function DrawerToggleButton({ onPress }) {
  const isDrawerOpen = useDrawerStatus() === 'open';

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name={isDrawerOpen ? 'close' : 'menu'}
          size={40}
          color={colors.light}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  icon: {
    marginHorizontal: 15,
  },
});
