import { StyleSheet, Text, View } from 'react-native';
import Screen from './components/Screen';
import colors from './config/colors';
import appStyles from './config/styles';
import WelcomeScreen from './screens/WelcomeScreen';
import AppTextInput from './components/forms/AppTextInput';
import AppForm from './components/forms/AppForm';
import AppFormField from './components/forms/AppFormField';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
