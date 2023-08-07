import { StyleSheet, Text, View } from 'react-native';

import appStyles from '../../config/styles';
import React from 'react';
import AppText from '../../components/AppText';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import SubmitButton from '../../components/forms/SubmitButton';

//mock data
const user = {
  name: 'Usuario',
  lastName: 'Uno',
  email: 'somemail@gmail.com',
  phone: '0901234561',
  password: '12345',
};

export default function EditMyInfoScreen() {
  return (
    <View style={styles.container}>
      <AppText style={appStyles.subHeading}>Actualizar mis datos</AppText>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{
            name: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            passwordConfirm: '',
          }}
        >
          <AppFormField
            name="name"
            icon="account-edit"
            placeholder={user.name}
          />
          <AppFormField
            name="lastName"
            icon="account-edit"
            placeholder={user.lastName}
          />
          <AppFormField name="phone" icon="phone" placeholder={user.phone} />
          <AppFormField
            name="password"
            icon="lock"
            placeholder="Contraseña"
            textContentType="password"
            secureTextEntry
          />
          <AppFormField
            name="passwordConfirm"
            icon="lock"
            placeholder="Confirmar contraseña"
            textContentType="password"
            secureTextEntry
          />
          <View style={styles.submitButtonContainer}>
            <SubmitButton title="Actualizar datos" />
          </View>
        </AppForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: appStyles.screenPadding,
    minHeight: '100%',
  },
  formContainer: {
    marginTop: 20,
  },
  submitButtonContainer: {
    marginTop: 20,
  },
});
