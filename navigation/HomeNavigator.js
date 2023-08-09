import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RecommendationsScreen from '../screens/recommendationsScreens/RecommendationsScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homescreen" component={HomeScreen} />
      <Stack.Screen name="recommendations" component={RecommendationsScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
