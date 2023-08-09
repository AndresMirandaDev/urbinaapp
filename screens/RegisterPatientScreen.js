import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import colors from '../config/colors';
import SubmitButton from '../components/forms/SubmitButton';
import AppText from '../components/AppText';
import appStyles from '../config/styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterPatientScreen() {
  return (
    <Screen>
      <LinearGradient
        colors={[colors.white, colors.secondaryOpacity]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />
      <View style={styles.formContainer}>
        <View style={styles.head}>
          <AppText style={appStyles.subHeading}>
            Registrar nuevo paciente
          </AppText>
        </View>
        <AppForm
          initialValues={{
            name: '',
            rut: '',
            email: '',
            phone: '',
          }}
        >
          <AppFormField name="name" placeholder="Nombre" icon="account" />
          <AppFormField name="name" placeholder="Rut" icon="identifier" />
          <AppFormField
            name="name"
            placeholder="Fecha de nacimiento"
            icon="calendar"
          />
          <AppFormField name="email" placeholder="Email" icon="email" />
          <AppFormField
            name="phone"
            placeholder="Número de teléfono"
            icon="phone"
          />
          <View style={styles.buttonContainer}>
            <SubmitButton title="Registrar nuevo paciente" />
          </View>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: appStyles.gradientBackground,
  buttonContainer: {
    marginTop: 0,
  },
  formContainer: {
    flex: 1,
    padding: 30,
  },
  head: {
    margin: 10,
  },
});
