import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import colors from '../config/colors';
import ProfileScreen from '../screens/ProfileScreen';
import EditMyInfoScreen from '../screens/myprofileScreens/EditMyInfoScreen';
import MyProfileNavigator from './MyProfileNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="home" size={20} color={color} />
            );
          },
          tabBarActiveTintColor: colors.secondary,
          tabBarLabel: 'Inicio',
        }}
      />
      <Tab.Screen
        name="profile"
        component={MyProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="account" size={20} color={color} />
            );
          },
          tabBarActiveTintColor: colors.secondary,
          tabBarLabel: 'Mi perfil',
        }}
      />
    </Tab.Navigator>
  );
}
