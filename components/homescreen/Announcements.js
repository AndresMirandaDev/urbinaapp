import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import * as Device from 'expo-device';

import colors from '../../config/colors';
import AppText from '../AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Announcements({ onPress }) {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.insideContainer}>
          <AppText style={styles.heading}>Avisos</AppText>
          {Device.osName === 'iOS' ? (
            <View style={styles.animation}>
              <LottieView
                source={require('../../assets/animations/alertlottie.json')}
                autoPlay
                loop
                resizeMode="cover"
                speed={0.5}
              />
            </View>
          ) : (
            <MaterialCommunityIcons
              name="message-alert-outline"
              size={130}
              color={colors.primaryOpacity}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
