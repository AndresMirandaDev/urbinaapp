import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

import colors from '../../config/colors';
import AppText from '../AppText';

export default function Announcements() {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <AppText style={styles.heading}>Avisos</AppText>
        <LottieView
          source={require('../../assets/animations/alertlottie.json')}
          autoPlay
          loop
          resizeMode="cover"
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
    borderRadius: 10,
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: 21,
    color: colors.light,
    fontWeight: '500',
  },
});
