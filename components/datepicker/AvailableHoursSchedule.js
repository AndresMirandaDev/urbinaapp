import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LottieView from 'lottie-react-native';
import * as Device from 'expo-device';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Modal } from 'react-native';

import AppText from '../AppText';
import colors from '../../config/colors';
import Screen from '../Screen';
import useMonth from '../../hooks/useMonth';
import useWeekDay from '../../hooks/useWeekDay';
import appStyles from '../../config/styles';
import UploadScreen from '../../screens/UploadScreen';
import AppButton from '../AppButton';

export default function AvailableHoursSchedule({ schedule, onPress, date }) {
  const [showModal, setShowModal] = useState(false);
  const [showDone, setShowDone] = useState(false);

  const month = useMonth(date);
  const weekday = useWeekDay(date);
  const dateDay = date.getDate();

  const handleConfirm = () => {
    setShowDone(true);
  };

  const handleButonPress = () => {
    Alert.alert(
      'Confirmación de Cita',
      `¿Desea reservar cita para el ${weekday} ${dateDay} de ${month}?`,
      [
        { text: 'Reservar', onPress: () => handleConfirm() },
        { text: 'Cancelar', style: 'destructive' },
      ]
    );
  };

  return (
    <TouchableOpacity
      onPress={() => {
        if (schedule.available) {
          setShowModal(true);
        } else {
          Alert.alert(
            'Lo sentimos, esta hora ya esta reservada, favor de escoger otro horario.'
          );
        }
      }}
    >
      <View style={styles.container}>
        <AppText style={styles.time}>{schedule.time}</AppText>
        <AppText
          style={[
            styles.time,
            { color: schedule.available ? colors.light : colors.danger },
          ]}
        >
          {schedule.available ? 'Disponible' : 'No disponible'}
        </AppText>
      </View>
      <Modal visible={showModal} animationType="fade">
        <Screen>
          <UploadScreen
            visible={showDone}
            onDone={() => setShowDone(false)}
            infoText="Su cita ha sido reservada"
          />
          <View style={styles.modalContent}>
            <View style={styles.modalHead}>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialCommunityIcons name="window-close" size={40} />
              </TouchableOpacity>
              <View style={styles.modalHeading}>
                <AppText style={appStyles.heading}> Reservar cita</AppText>
              </View>
            </View>
            <View style={styles.scheduleConfirm}>
              <View style={styles.backgroundView}></View>
              <View>
                <AppText style={[appStyles.subHeading, styles.subHeading]}>
                  {weekday} {dateDay} {month}
                </AppText>
                <AppText style={styles.time}>{schedule.time}</AppText>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            {Device.osName === 'iOS' && (
              <View style={{ flex: 1 }}>
                <LottieView
                  source={require('../../assets/animations/confirmVisit.json')}
                  autoPlay
                  loop
                  resizeMode="contain"
                  speed={0.5}
                />
              </View>
            )}
            <AppButton title="Reservar cita" onPress={handleButonPress} />
          </View>
        </Screen>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.secondary,
    margin: 5,
    borderRadius: 30,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    flex: 1,
    padding: 50,
    bottom: 50,
  },
  backgroundView: {
    backgroundColor: colors.primaryOpacity,
    height: 90,
    width: 320,
    position: 'absolute',
    borderBottomRightRadius: 40,
  },
  time: {
    textAlign: 'center',
    color: colors.light,
    padding: 3,
  },
  modalHead: {
    backgroundColor: colors.secondary,
    padding: 10,
    flexDirection: 'row',
  },
  modalHeading: {
    marginLeft: 40,
  },
  scheduleConfirm: {
    padding: 10,
    backgroundColor: colors.primary,
    marginTop: 20,
    padding: 30,
  },
  subHeading: {
    color: colors.light,
    padding: 20,
  },
});
