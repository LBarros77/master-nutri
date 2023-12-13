import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBox, createText } from '@shopify/restyle';
import auth from "@react-native-firebase/auth";

import { ButtonFooter } from '../../Controllers/ButtonFooter';
import { Button } from '../../Controllers/Button';
import { Input } from '../../Controllers/Input';
import { ThemeProps } from '../../../assets/theme';
import { Alert } from 'react-native';

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => Alert.alert("E-mail ou Senha invalido."))
      .finally(() => setIsLoading(false))
  }

  function handleForgotPassword() {
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você."))
    .catch((error) => console.log(error))
  }

  return (
    <Box>
      <Text variant="title">Entrar</Text>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleSignIn} isLoading={isLoading} />

      <Box flexDirection="row" justifyContent="space-between" alignItems="center" margin="m">
        <ButtonFooter title="Criar conta" icon="person-add" onPress={() => navigation.navigate("register")} />
        <ButtonFooter title="Esqueci a senha" icon="mail" onPress={handleForgotPassword} />
      </Box>
    </Box>
  );
}