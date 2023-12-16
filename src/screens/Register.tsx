import { createBox, createText } from "@shopify/restyle";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ThemeProps } from "../assets/theme";
import { AccountForm } from "../components/Form/AccountForm";
import { ButtonCustom } from "../components/Controllers/ButtonCustom";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function Register() {
  const navigation = useNavigation();

  return (
    <Box flex={1} justifyContent="center" m="m">
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Box>
          <AccountForm />
          
          <ButtonCustom
            title="Eu já tenho uma conta"
            icon="arrow-back"
            onPress={() => navigation.goBack()}
          />
        </Box>
      </KeyboardAvoidingView>
    </Box>
  )
}