import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../../components/Screen';
import ScheduledVisit from '../../components/visitscreen/ScheduledVisit';
import ConfirmVisit from '../../components/visitscreen/ConfirmVisit';
import Reschedule from '../../components/visitscreen/Reschedule';

export default function VisitsScreen({ navigation }) {
  const handleConfirm = () => {
    Alert.alert(
      'Confirmar cita',
      '¿Desea confirmar la cita programada para el 1 de enero?',
      [
        {
          text: 'Si',
          onPress: () => {
            Alert.alert('Cita para el 1 de enero ha sido confirmada.');
          },
        },
        { text: 'Cancelar', style: 'destructive' },
      ]
    );
  };
  return (
    <Screen>
      <View style={styles.ScheduledVisit}>
        <ScheduledVisit />
      </View>
      <View style={styles.actions}>
        <ConfirmVisit onPress={handleConfirm} />
        <Reschedule
          onPress={() => {
            navigation.navigate('rescheduleScreen');
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    marginTop: 20,
  },
  ScheduledVisit: {
    margin: 5,
  },
});
