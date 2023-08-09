import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

import AppText from '../AppText';
import colors from '../../config/colors';

export default function Recommendations({ onPress }) {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.insideContainer}>
          <AppText style={styles.heading}>Cuidados</AppText>
          <View style={styles.animation}>
            <LottieView
              source={require('../../assets/animations/careanimation.json')}
              loop
              autoPlay
              speed={0.5}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
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
