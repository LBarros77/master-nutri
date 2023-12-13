import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../assets/theme/colors';
import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.greenPrimary,
        tabBarInactiveBackgroundColor: colors.GRAY_300,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />,
          tabBarLabel: "Início"
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name="clipboard" color={color} size={size} />,
          tabBarLabel: "Receita"
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} />,
          tabBarLabel: "Perfil"
        }}
      />
    </Tab.Navigator>
  )
}