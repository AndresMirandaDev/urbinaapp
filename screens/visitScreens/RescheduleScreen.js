import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../../components/Screen';
import appStyles from '../../config/styles';
import AppText from '../../components/AppText';
import AppDatePicker from '../../components/datepicker/AppDatePicker';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../config/colors';

export default function RescheduleScreen() {
  return (
    <Screen>
      <LinearGradient
        colors={[colors.secondaryOpacity, colors.light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />
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
  background: appStyles.gradientBackground,
  container: {
    padding: appStyles.screenPadding,
  },
  calendarContainer: {
    marginTop: 30,
  },
});
