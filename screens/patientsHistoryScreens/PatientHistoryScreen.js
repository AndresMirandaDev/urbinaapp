import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import appStyles from '../../config/styles';
import Screen from '../../components/Screen';
import AppText from '../../components/AppText';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../config/colors';
import SearchPatientForm from '../../components/patienthistoryscreen/SearchPatientForm';
import PatientListItem from '../../components/patienthistoryscreen/PatientListItem';
import ListItemSeparator from '../../components/ListItemSeparator';

const patients = [
  {
    id: 1,
    rut: '10.000.000-0',
    name: 'Carlos',
    lastName: 'Rodriguez',
    age: 34,
    diseases: [],
    email: 'email@a.cl',
    postoperatorio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ex ac ante malesuada porttitor. Vivamus sed lorem id ligula pretium vehicula. Aenean pharetra velit justo, a placerat erat varius nec. Nunc tristique neque neque, a tempus elit sagittis ut. Etiam posuere mi ex, id congue ligula placerat non. In hac habitasse platea dictumst. Maecenas id ultricies felis, non venenatis velit. Duis at orci placerat, mollis mi eget, consectetur ex. Etiam sed enim non lectus convallis rhoncus fringilla eu eros. Nam accumsan posuere mauris. Phasellus gravida risus eu dolor laoreet, vitae rutrum leo mattis. Nam ultricies bibendum ligula ullamcorper ornare. Etiam pellentesque molestie blandit. Curabitur molestie sapien velit, non mollis turpis pulvinar ut.',
  },
  {
    id: 2,
    rut: '10.000.000-0',
    name: 'Juan',
    lastName: 'Carmona',
    age: 40,
    diseases: [],
    email: 'email1@a.cl',
    postoperatorio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ex ac ante malesuada porttitor. Vivamus sed lorem id ligula pretium vehicula. Aenean pharetra velit justo, a placerat erat varius nec. Nunc tristique neque neque, a tempus elit sagittis ut. Etiam posuere mi ex, id congue ligula placerat non. In hac habitasse platea dictumst. Maecenas id ultricies felis, non venenatis velit. Duis at orci placerat, mollis mi eget, consectetur ex. Etiam sed enim non lectus convallis rhoncus fringilla eu eros. Nam accumsan posuere mauris. Phasellus gravida risus eu dolor laoreet, vitae rutrum leo mattis. Nam ultricies bibendum ligula ullamcorper ornare. Etiam pellentesque molestie blandit. Curabitur molestie sapien velit, non mollis turpis pulvinar ut.',
  },
  {
    id: 3,
    rut: '10.000.000-3',
    name: 'Alexis',
    lastName: 'Torres',
    age: 23,
    diseases: [],
    email: 'email3@a.cl',
    postoperatorio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ex ac ante malesuada porttitor. Vivamus sed lorem id ligula pretium vehicula. Aenean pharetra velit justo, a placerat erat varius nec. Nunc tristique neque neque, a tempus elit sagittis ut. Etiam posuere mi ex, id congue ligula placerat non. In hac habitasse platea dictumst. Maecenas id ultricies felis, non venenatis velit. Duis at orci placerat, mollis mi eget, consectetur ex. Etiam sed enim non lectus convallis rhoncus fringilla eu eros. Nam accumsan posuere mauris. Phasellus gravida risus eu dolor laoreet, vitae rutrum leo mattis. Nam ultricies bibendum ligula ullamcorper ornare. Etiam pellentesque molestie blandit. Curabitur molestie sapien velit, non mollis turpis pulvinar ut.',
  },
  {
    id: 14,
    rut: '10.000.000-4',
    name: 'Teresa',
    lastName: 'Perez',
    age: 67,
    diseases: [],
    email: 'email4@a.cl',
    postoperatorio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ex ac ante malesuada porttitor. Vivamus sed lorem id ligula pretium vehicula. Aenean pharetra velit justo, a placerat erat varius nec. Nunc tristique neque neque, a tempus elit sagittis ut. Etiam posuere mi ex, id congue ligula placerat non. In hac habitasse platea dictumst. Maecenas id ultricies felis, non venenatis velit. Duis at orci placerat, mollis mi eget, consectetur ex. Etiam sed enim non lectus convallis rhoncus fringilla eu eros. Nam accumsan posuere mauris. Phasellus gravida risus eu dolor laoreet, vitae rutrum leo mattis. Nam ultricies bibendum ligula ullamcorper ornare. Etiam pellentesque molestie blandit. Curabitur molestie sapien velit, non mollis turpis pulvinar ut.',
  },
  {
    id: 5,
    rut: '10.000.000-5',
    name: 'Alejandra',
    lastName: 'Sandoval',
    age: 30,
    diseases: [],
    email: 'email5@a.cl',
    postoperatorio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ex ac ante malesuada porttitor. Vivamus sed lorem id ligula pretium vehicula. Aenean pharetra velit justo, a placerat erat varius nec. Nunc tristique neque neque, a tempus elit sagittis ut. Etiam posuere mi ex, id congue ligula placerat non. In hac habitasse platea dictumst. Maecenas id ultricies felis, non venenatis velit. Duis at orci placerat, mollis mi eget, consectetur ex. Etiam sed enim non lectus convallis rhoncus fringilla eu eros. Nam accumsan posuere mauris. Phasellus gravida risus eu dolor laoreet, vitae rutrum leo mattis. Nam ultricies bibendum ligula ullamcorper ornare. Etiam pellentesque molestie blandit. Curabitur molestie sapien velit, non mollis turpis pulvinar ut.',
  },
];

export default function PatientHistoryScreen() {
  return (
    <Screen>
      <LinearGradient
        colors={[colors.secondaryOpacity, colors.light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />
      <View style={styles.container}>
        <SearchPatientForm />
        <View style={styles.listContainer}>
          <FlatList
            data={patients}
            keyExtractor={(patient) => {
              return patient.id;
            }}
            renderItem={({ item }) => {
              return <PatientListItem patient={item} />;
            }}
            ItemSeparatorComponent={<ListItemSeparator color={colors.light} />}
            style={{ borderRadius: 10 }}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: appStyles.gradientBackground,
  container: {
    padding: appStyles.screenPadding,
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginTop: 30,
    borderRadius: 10,
  },
});
