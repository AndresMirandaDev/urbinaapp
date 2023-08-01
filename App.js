import { StyleSheet, Text, View } from 'react-native';
import Screen from './components/Screen';
import colors from './config/colors';
import appStyles from './config/styles';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
