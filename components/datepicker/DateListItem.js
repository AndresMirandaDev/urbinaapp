import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import colors from '../../config/colors';
import AppText from '../AppText';

export default function DateListItem({ date }) {
  const componentDate = new Date(date);

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    setYear(componentDate.getFullYear());
    setMonth(componentDate.getMonth());
    setDay(componentDate.getDay());
  }, []);

  return (
    <View style={styles.container}>
      <AppText>{year}</AppText>
      <AppText>{month}</AppText>
      <AppText>{day}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    margin: 10,
    padding: 20,
  },
});
