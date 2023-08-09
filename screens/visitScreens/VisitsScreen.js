import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Screen from '../../components/Screen';
import ScheduledVisit from '../../components/visitscreen/ScheduledVisit';
import ConfirmVisit from '../../components/visitscreen/ConfirmVisit';
import Reschedule from '../../components/visitscreen/Reschedule';
import UploadScreen from '../UploadScreen';

export default function VisitsScreen({ navigation }) {
  const [showDone, setShowDone] = useState(false);

  const handleConfirm = () => {
    setShowDone(true);
  };

  const handleConfirmButtonPress = () => {
    Alert.alert(
      'Confirmar cita',
      '¿Desea confirmar la cita programada para el 1 de enero?',
      [
        {
          text: 'Si',
          onPress: () => handleConfirm(),
        },
        { text: 'Cancelar', style: 'destructive' },
      ]
    );
  };
  return (
    <Screen>
      <UploadScreen
        visible={showDone}
        onDone={() => setShowDone(false)}
        infoText="Su cita ha sido confirmada"
      />
      <View style={styles.ScheduledVisit}>
        <ScheduledVisit />
      </View>
      <View style={styles.actions}>
        <ConfirmVisit onPress={handleConfirmButtonPress} />
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
