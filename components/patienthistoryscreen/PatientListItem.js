import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../config/colors';
import AppText from '../AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function PatientListItem({ patient }) {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <AppText style={styles.text}>
          {patient.name} {patient.lastName}
        </AppText>
        <AppText style={styles.text}>{patient.rut}</AppText>
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="chevron-right"
          size={30}
          color={colors.medium}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.medium,
  },
});
