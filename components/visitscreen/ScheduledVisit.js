import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import LottieView from 'lottie-react-native';
import Screen from '../Screen';
import AppText from '../AppText';
import colors from '../../config/colors';

export default function ScheduledVisit() {
  return (
    <View style={styles.container}>
      <View style={styles.nextVisit}>
        <View style={styles.head}>
          <LottieView
            source={require('../../assets/animations/visit.json')}
            autoPlay
            loop
            autoSize
            speed={0.4}
          />
          <AppText style={styles.headText}>Cita programada</AppText>
        </View>
        <View style={styles.visitDate}>
          <AppText style={styles.dateText}>1 Enero</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  dateText: {
    color: colors.light,
    fontSize: 25,
    textAlign: 'center',
  },
  head: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontSize: 27,
    color: colors.light,
    fontWeight: 500,
  },
  nextVisit: {
    backgroundColor: colors.secondary,
    borderRadius: 40,
  },
  visitDate: {
    backgroundColor: colors.primary,
    padding: 15,
    marginRight: 40,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});
