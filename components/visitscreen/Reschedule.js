import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import LottieView from 'lottie-react-native';
import colors from '../../config/colors';
import AppText from '../AppText';

export default function Reschedule() {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <AppText style={styles.headText}>Reagendar cita</AppText>
        <LottieView
          source={require('../../assets/animations/reschedulelottie.json')}
          autoPlay
          loop
          autoSize
          style={{ marginTop: 20 }}
          speed={0.3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    margin: 4,
    borderRadius: 30,
  },
  headText: {
    textAlign: 'center',
    color: colors.light,
    fontWeight: 500,
    fontSize: 25,
  },
  insideContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
