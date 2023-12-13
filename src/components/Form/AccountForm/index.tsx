import { createBox, createText } from "@shopify/restyle";
import { useState } from "react";
import auth from "@react-native-firebase/auth";

import { ThemeProps } from "../../../assets/theme";
import { Input } from "../../../components/Controllers/Input";
import { Button } from "../../../components/Controllers/Button";
import { Alert } from "react-native";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function AccountForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleNewAccount() {
    setIsLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
      .catch((error) => {
        console.log(error);
        Alert.alert("E-mail ou Senha invalido.")
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Box>
      <Text variant="title2" textAlign="center" p="l">Cadastrar</Text>
      <Text variant="label">E-mail</Text>
      <Input placeholder="Digite seu E-mail" onChangeText={setEmail} />
      <Text variant="label">Senha</Text>
      <Input placeholder="Digite a senha" onChangeText={setPassword} secureTextEntry />
      <Button title="Cadastrar" isLoading={isLoading} onPress={handleNewAccount} />
    </Box>
  )
}