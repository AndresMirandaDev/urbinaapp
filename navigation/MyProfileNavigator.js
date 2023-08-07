import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import EditMyInfoScreen from '../screens/myprofileScreens/EditMyInfoScreen';

const Stack = createNativeStackNavigator();

const MyProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="myProfile" component={ProfileScreen} />
      <Stack.Screen name="editMyInfo" component={EditMyInfoScreen} />
    </Stack.Navigator>
  );
};

export default MyProfileNavigator;
