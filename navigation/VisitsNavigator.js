import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VisitsScreen from '../screens/visitScreens/VisitsScreen';
import RescheduleScreen from '../screens/visitScreens/RescheduleScreen';

const Stack = createNativeStackNavigator();

const VisitsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="vistsScreen" component={VisitsScreen} />
      <Stack.Screen name="rescheduleScreen" component={RescheduleScreen} />
    </Stack.Navigator>
  );
};

export default VisitsNavigator;
