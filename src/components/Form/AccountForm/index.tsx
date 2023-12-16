import { createBox, createText } from "@shopify/restyle";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../services/firebase/firebaseConfig";
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

  async function handleNewAccount() {
    setIsLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => Alert.alert("Conta", "Cadastrado com sucesso!"))
      .catch((error) => {
        console.log(error);
        Alert.alert("E-mail ou Senha invalido.")
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Box gap="m">
      <Text variant="title" textAlign="center" p="l">Cadastrar</Text>
      <Text variant="label" color="GRAY_300">E-mail</Text>
      <Input placeholder="Digite seu E-mail" onChangeText={setEmail} />
      <Text variant="label" color="GRAY_300">Senha</Text>
      <Input placeholder="Digite a senha" onChangeText={setPassword} secureTextEntry={true} />
      <Button title="Cadastrar" isLoading={isLoading} onPress={handleNewAccount} />
    </Box>
  )
}