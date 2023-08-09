import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import AppText from '../AppText';
import colors from '../../config/colors';

export default function AvailableHoursSchedule({ schedule }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.time}>{schedule.time}</AppText>
      <AppText
        style={[
          styles.time,
          { color: schedule.available ? colors.light : colors.danger },
        ]}
      >
        {schedule.available ? 'Disponible' : 'No disponible'}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.secondary,
    margin: 5,
    borderRadius: 30,
    paddingHorizontal: 30,
  },
  time: {
    textAlign: 'center',
    color: colors.light,
  },
});
