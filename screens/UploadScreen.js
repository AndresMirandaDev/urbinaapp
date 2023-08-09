import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

export default function UploadScreen({ visible = false, onDone, infoText }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <LottieView
          source={require('../assets/animations/checkdone.json')}
          autoPlay
          loop={false}
          style={styles.animation}
          onAnimationFinish={onDone}
        />
        <AppText style={styles.info}>{infoText}</AppText>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  info: {
    fontSize: 25,
    marginTop: 50,
    textAlign: 'center',
    color: colors.primary,
    fontWeight: 'bold',
  },
});
