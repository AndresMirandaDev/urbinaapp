import { StyleSheet, View } from 'react-native';

import React from 'react';
import Screen from '../components/Screen';
import colors from '../config/colors';
import WelcomeMessage from '../components/homescreen/WelcomeMessage';
import VisitInfo from '../components/homescreen/VisitInfo';
import Recommendations from '../components/homescreen/Recommendations';
import Announcements from '../components/homescreen/Announcements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <WelcomeMessage />
      </View>
      <View style={styles.nextVisit}>
        <VisitInfo />
      </View>
      <View style={styles.actions}>
        <Recommendations
          onPress={() => {
            navigation.navigate('recommendations');
          }}
        />
        <Announcements />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  actions: {
    backgroundColor: colors.light,
    borderRadius: 30,
    padding: 15,
    flexDirection: 'row',
    bottom: 20,
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  nextVisit: {
    flex: 1,
    height: 100,
    borderRadius: 30,
    bottom: 30,
  },
});
