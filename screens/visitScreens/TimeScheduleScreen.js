import { StyleSheet, FlatList, View, Alert } from 'react-native';
import React, { useState } from 'react';

import Screen from '../../components/Screen';
import AppText from '../../components/AppText';
import appStyles from '../../config/styles';
import useMonth from '../../hooks/useMonth';
import useWeekDay from '../../hooks/useWeekDay';
import AvailableHoursSchedule from '../../components/datepicker/AvailableHoursSchedule';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../config/colors';

const availableHours = [
  { time: '9:00-10:00', available: true, id: 1 },
  { time: '10:00-11:00', available: false, id: 2 },
  { time: '11:00-12:00', available: false, id: 3 },
  { time: '12:00-13:00', available: true, id: 4 },
  { time: '13:00-14:00', available: false, id: 5 },
  { time: '14:00-15:00', available: true, id: 6 },
  { time: '15:00-16:00', available: false, id: 7 },
  { time: '17:00-18:00', available: true, id: 8 },
];

export default function TimeScheduleScreen({ route }) {
  const date = route.params;

  const month = useMonth(date);
  const weekday = useWeekDay(date);
  const dateDay = date.getDate();

  const [showModal, setShowModal] = useState(true);

  const handlePress = () => {};

  return (
    <Screen>
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.secondaryOpacity, colors.light]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.background}
        />
        <View>
          <AppText style={[appStyles.subHeading]}>
            Horas Dispoibles {weekday} {dateDay} {month}
          </AppText>
        </View>
        <View style={styles.scheduleContainer}>
          <FlatList
            data={availableHours}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return <AvailableHoursSchedule schedule={item} date={date} />;
            }}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: appStyles.gradientBackground,
  container: {
    padding: appStyles.screenPadding,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  scheduleContainer: {
    marginTop: 20,
    flex: 1,
    minWidth: '100%',
  },
});
