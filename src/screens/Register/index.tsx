import { createBox, createText } from "@shopify/restyle";
import { KeyboardAvoidingView, Platform } from "react-native";

import { ThemeProps } from "../../assets/theme";
import { AccountForm } from "../../components/Form/SignInForm/AccountForm";
import { ButtonCustom } from "../../components/Controllers/ButtonCustom";
import { useNavigation } from "expo-router";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function Register() {
  const navigation = useNavigation();

  return (
    <Box>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Box>
          <Text variant="title2">Novos hábitos, nova jornada!</Text>
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