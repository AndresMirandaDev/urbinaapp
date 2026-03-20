import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientHistoryScreen from '../screens/patientsHistoryScreens/PatientHistoryScreen';

const Stack = createNativeStackNavigator();

const PatientHistoryNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="patientHistoryScreenMain"
        component={PatientHistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default PatientHistoryNavigator;
