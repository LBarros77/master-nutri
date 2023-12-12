import { createBox, createText } from "@shopify/restyle";
import { KeyboardAvoidingView, Platform } from "react-native";

import { SignInForm } from "../../components/Form/SignInForm";
import { ThemeProps } from "../../assets/theme";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function SignIn() {
  return (
    <Box>
      <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : undefined}>
        <Box>
          <Text>A sua saúde merece um cuidado especial</Text>
          <SignInForm />
        </Box>
      </KeyboardAvoidingView>
    </Box>
  )
}