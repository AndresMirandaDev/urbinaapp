import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import colors from '../config/colors';
import HeadBar from '../components/HeadBar';
import DrawerToggleButton from '../components/DrawerToggleButton';
import BottomTabNavigator from './BottomTabNavigator';

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
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Other" component={LoginScreen} />
    </Drawer.Navigator>
  );
}
