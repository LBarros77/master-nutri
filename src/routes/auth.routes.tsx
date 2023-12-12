import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Register } from "../screens/Register";
import { SignIn } from "../screens/SignIn";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LognIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}