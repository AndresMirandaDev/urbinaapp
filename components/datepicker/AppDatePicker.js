import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import AppText from '../AppText';
import DateListItem from './DateListItem';
import useMonth from '../../hooks/useMonth';
import colors from '../../config/colors';
import { useNavigation } from '@react-navigation/native';

export default function AppDatePicker() {
  const [weekdays, setWeekdays] = useState([]);
  const currentYear = new Date().getFullYear();
  const currentMonth = useMonth(new Date());
  const navigation = useNavigation();

  const getAllWeekdaysOfMonth = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const weekdays = [];

    // Get the first day of the current month
    const firstDay = new Date(
      today.getFullYear(),
      currentMonth,
      today.getDate()
    );

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
      <View style={styles.subHeadingContainer}>
        <AppText style={styles.subHeading}>Ecoge una fecha </AppText>
        <AppText style={styles.subHeading}>
          {currentMonth} {currentYear}
        </AppText>
      </View>

      <View style={styles.daysContainer}>
        <FlatList
          data={weekdays}
          renderItem={({ item }) => {
            return (
              <DateListItem
                date={item}
                onPress={() => {
                  navigation.navigate('timeScheduleScreen', new Date(item));
                }}
              />
            );
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
    paddingBottom: 250,
    marginTop: 10,
  },
  subHeadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeading: {
    fontSize: 20,
    color: colors.medium,
  },
});
