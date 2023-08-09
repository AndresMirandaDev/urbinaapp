import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VisitsScreen from '../screens/visitScreens/VisitsScreen';
import RescheduleScreen from '../screens/visitScreens/RescheduleScreen';
import TimeScheduleScreen from '../screens/visitScreens/TimeScheduleScreen';

const Stack = createNativeStackNavigator();

const VisitsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="vistsScreen" component={VisitsScreen} />
      <Stack.Screen name="rescheduleScreen" component={RescheduleScreen} />
      <Stack.Screen name="timeScheduleScreen" component={TimeScheduleScreen} />
    </Stack.Navigator>
  );
};

export default VisitsNavigator;
