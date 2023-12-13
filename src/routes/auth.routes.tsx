import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Register } from "../screens/Register";
import { SignIn } from "../screens/SignIn";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  )
}