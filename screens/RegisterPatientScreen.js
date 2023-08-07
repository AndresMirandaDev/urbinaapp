import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import colors from '../config/colors';
import SubmitButton from '../components/forms/SubmitButton';
import AppText from '../components/AppText';
import appStyles from '../config/styles';

export default function RegisterPatientScreen() {
  return (
    <Screen>
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
  buttonContainer: {
    marginTop: 0,
  },
  formContainer: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 30,
  },
  head: {
    margin: 10,
  },
});
