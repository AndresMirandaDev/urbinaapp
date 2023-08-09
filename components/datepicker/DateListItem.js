import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useNavigation } from 'react';

import colors from '../../config/colors';
import AppText from '../AppText';
import useWeekDay from '../../hooks/useWeekDay';

const schedule = {};

export default function DateListItem({ date, onPress }) {
  const componentDate = new Date(date);

  const day = useWeekDay(componentDate);

  const [dateDay, setDateDay] = useState('');

  useEffect(() => {
    setDateDay(componentDate.getDate());
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppText style={styles.text}>
          {day} {dateDay}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    margin: 10,
    padding: 20,
    minWidth: 140,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: colors.light,
  },
});
