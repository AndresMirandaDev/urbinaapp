import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../../components/Screen';
import appStyles from '../../config/styles';
import AppText from '../../components/AppText';
import AppDatePicker from '../../components/datepicker/AppDatePicker';

export default function RescheduleScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <AppText style={appStyles.subHeading}>
            Reagendacion de cita del 1 de enero
          </AppText>
        </View>
        <View style={styles.calendarContainer}>
          <AppDatePicker />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: appStyles.screenPadding,
  },
  calendarContainer: {
    marginTop: 30,
  },
});
