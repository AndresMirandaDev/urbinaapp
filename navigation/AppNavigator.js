import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import HeadBar from '../components/HeadBar';

import BottomTabNavigator from './BottomTabNavigator';
import RegisterPatientScreen from '../screens/RegisterPatientScreen';

import VisitsScreen from '../screens/VisitsScreen';

const Drawer = createDrawerNavigator();

export default function AppNavigator({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{
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
      <Drawer.Screen name="Inicio" component={BottomTabNavigator} />
      <Drawer.Screen
        name="Registro de pacientes"
        component={RegisterPatientScreen}
      />
      <Drawer.Screen name="Citas" component={VisitsScreen} />
    </Drawer.Navigator>
  );
}
