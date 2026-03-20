import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppForm from '../forms/AppForm';
import AppFormField from '../forms/AppFormField';
import AppButton from '../AppButton';

export default function SearchPatientForm() {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          rut: '',
        }}
      >
        <AppFormField
          name="rut"
          icon="magnify"
          placeholder="Ingresar rut de paciente"
        />
        <View style={styles.buttonContainer}>
          <AppButton title="Buscar" />
        </View>
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({});
