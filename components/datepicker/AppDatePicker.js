import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import AppText from '../AppText';
import DateListItem from './DateListItem';

export default function AppDatePicker() {
  const [weekdays, setWeekdays] = useState([]);

  const getAllWeekdaysOfMonth = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const weekdays = [];

    // Get the first day of the current month
    const firstDay = new Date(today.getFullYear(), currentMonth, 1);

    // Get the last day of the current month
    const lastDay = new Date(today.getFullYear(), currentMonth + 1, 0);

    // Loop through each day of the month
    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      const dayOfWeek = day.getDay(); // 0 (Sunday) to 6 (Saturday)
      if (dayOfWeek > 0 && dayOfWeek < 6) {
        // If it's a weekday (Monday to Friday), add it to the weekdays array
        weekdays.push(new Date(day));
      }
    }

    setWeekdays(weekdays);
  };

  useEffect(() => {
    getAllWeekdaysOfMonth();
  }, []);

  console.log(weekdays);
  return (
    <View style={styles.container}>
      <AppText>Ecoge una fecha </AppText>
      <View style={styles.daysContainer}>
        <FlatList
          data={weekdays}
          renderItem={({ item }) => {
            return <DateListItem date={item} />;
          }}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  daysContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
    paddingBottom: 130,
  },
});
