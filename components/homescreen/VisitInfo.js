import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import colors from '../../config/colors';
import appStyles from '../../config/styles';

export default function VisitInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <AppText
          style={[appStyles.heading, { color: colors.primary, padding: 20 }]}
        >
          Siguiente cita
        </AppText>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="calendar-check"
            size={50}
            color={colors.primary}
          />
        </View>
      </View>
      <View style={styles.date}>
        <AppText style={{ color: colors.light, fontSize: 30 }}>1 Enero</AppText>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('ir a citas pressed');
        }}
      >
        <View style={styles.redirectLink}>
          <AppText>Ir a citas</AppText>
          <MaterialCommunityIcons name="chevron-right" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingTop: 20,
    paddingRight: 20,
    borderRadius: 24,
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.primary,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  redirectLink: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
});
