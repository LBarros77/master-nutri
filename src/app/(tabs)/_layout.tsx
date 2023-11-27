import { Tabs } from "expo-router";
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color, size}) => <FontAwesome name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Meu Cardápio",
          tabBarIcon: ({color, size}) => <Entypo name="clipboard" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({color, size}) => <FontAwesome name="user" color={color} size={size} />,
        }}
      />
    </Tabs>
  )
}