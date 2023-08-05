import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import UserInfo from '../components/profilescreen/UserInfo';

export default function ProfileScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <UserInfo />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
