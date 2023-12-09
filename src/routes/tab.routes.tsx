import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from "../screens/Home";
import Menu from "../screens/Menu";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
          tabBarLabel: "Início"
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="clipboard" color={color} size={size} />,
          tabBarLabel: "Receita"
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="user" color={color} size={size} />,
          tabBarLabel: "Perfil"
        }}
      />
    </Tab.Navigator>
  )
}