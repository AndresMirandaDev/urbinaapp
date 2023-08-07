import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../config/colors';
import AppText from '../AppText';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ConfirmVisit({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.insideContainer}>
          <AppText style={styles.headText}>Confirmar Cita</AppText>
          <LottieView
            source={require('../../assets/animations/check.json')}
            loop
            autoPlay
            autoSize
            speed={0.5}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    margin: 4,
    borderRadius: 30,
  },
  headText: {
    fontSize: 25,
    fontWeight: 500,
    color: colors.light,
    textAlign: 'center',
  },
  insideContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
