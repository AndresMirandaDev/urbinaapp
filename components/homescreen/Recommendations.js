import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

import AppText from '../AppText';
import colors from '../../config/colors';

export default function Recommendations() {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <AppText style={styles.heading}>Cuidados</AppText>
        <LottieView
          source={require('../../assets/animations/careanimation.json')}
          loop
          autoPlay
          speed={0.5}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    padding: 10,
    borderRadius: 30,
    margin: 2,
  },
  insideContainer: {
    backgroundColor: colors.secondary,
    padding: 20,
    borderRadius: 20,
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: 21,
    color: colors.light,
    fontWeight: '500',
  },
});