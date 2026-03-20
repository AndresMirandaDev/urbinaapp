import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import HeadBar from '../components/HeadBar';

import BottomTabNavigator from './BottomTabNavigator';
import RegisterPatientScreen from '../screens/RegisterPatientScreen';

import VisitsNavigator from './VisitsNavigator';
import PatientHistoryNavigator from './patientHistoryNavigator';

const Drawer = createDrawerNavigator();

export default function AppNavigator({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEdgeWidth: 0,
        headerTitle: '',
        drawerActiveBackgroundColor: colors.secondary,
        headerBackground: () => {
          return <HeadBar />;
        },
        drawerStyle: {
          backgroundColor: colors.light,
          width: 300,
        },
        drawerHideStatusBarOnOpen: true,
        drawerStatusBarAnimation: 'fade',
        header: ({ navigation }) => {
          return (
            <HeadBar
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          );
        },
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="home"
                size={30}
                color={focused ? colors.primary : colors.secondary}
              />
            );
          },
          drawerActiveTintColor: colors.primary,
        }}
      />
      <Drawer.Screen
        name="Registro de pacientes"
        component={RegisterPatientScreen}
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="form-select"
                size={30}
                color={focused ? colors.primary : colors.secondary}
              />
            );
          },
          drawerActiveTintColor: colors.primary,
        }}
      />
      <Drawer.Screen
        name="Citas"
        component={VisitsNavigator}
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="calendar"
                size={30}
                color={focused ? colors.primary : colors.secondary}
              />
            );
          },
          drawerActiveTintColor: colors.primary,
        }}
      />
      <Drawer.Screen
        name="Historial de pacientes"
        component={PatientHistoryNavigator}
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="history"
                size={30}
                color={focused ? colors.primary : colors.secondary}
              />
            );
          },
          drawerActiveTintColor: colors.primary,
        }}
      />
    </Drawer.Navigator>
  );
}
