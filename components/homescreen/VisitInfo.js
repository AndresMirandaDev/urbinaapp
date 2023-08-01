import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import colors from '../../config/colors';
import appStyles from '../../config/styles';

export default function VisitInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <AppText style={[appStyles.heading, { color: colors.primary }]}>
          Siguiente cita
        </AppText>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="calendar"
            size={40}
            color={colors.medium}
          />
        </View>
      </View>
      <View style={styles.date}>
        <AppText
          style={[appStyles.text, { color: colors.primary, fontSize: 30 }]}
        >
          1 Enero
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 10,
    borderRadius: 10,
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
