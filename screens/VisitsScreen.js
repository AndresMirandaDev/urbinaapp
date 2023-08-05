import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../components/Screen';
import ScheduledVisit from '../components/visitscreen/ScheduledVisit';
import ConfirmVisit from '../components/visitscreen/ConfirmVisit';
import Reschedule from '../components/visitscreen/Reschedule';

export default function VisitsScreen() {
  return (
    <Screen>
      <ScheduledVisit />
      <View style={styles.actions}>
        <ConfirmVisit />
        <Reschedule />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
