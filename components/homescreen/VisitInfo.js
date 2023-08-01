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
        <AppText
          style={[appStyles.heading, { color: colors.light, padding: 20 }]}
        >
          Siguiente cita
        </AppText>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="calendar"
            size={50}
            color={colors.light}
          />
        </View>
      </View>
      <View style={styles.date}>
        <AppText style={{ color: colors.light, fontSize: 50 }}>1 Enero</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingTop: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.primary,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
