import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBox, createText } from '@shopify/restyle';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

import { auth } from '../../../services/firebase/firebaseConfig';
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

  async function handleSignIn() {
    setIsLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .catch((error) => Alert.alert("E-mail ou Senha invalido."))
      .finally(() => setIsLoading(false))
  }

  function handleForgotPassword() {
    sendPasswordResetEmail(auth, email)
      .then(() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você."))
      .catch((error) => console.log(error))
  }

  return (
    <Box gap="m">
      <Text variant="title" textAlign="center" p="l">Entrar</Text>
      <Text variant="label" color="GRAY_300">E-mail</Text>
      <Input placeholder="exemplo@exemplo.com" onChangeText={setEmail} />
      <Text variant="label" color="GRAY_300">Senha</Text>
      <Input placeholder="Digite no mínimo 6 caracteres" onChangeText={setPassword} secureTextEntry={true} />
      <Button title="Entrar" onPress={handleSignIn} isLoading={isLoading} />

      <Box flexDirection="row" justifyContent="space-between" alignItems="center" my="m">
        <ButtonFooter title="Criar conta" icon="person-add" onPress={() => navigation.navigate("register")} />
        <ButtonFooter title="Esqueci a senha" icon="mail" onPress={handleForgotPassword} />
      </Box>
    </Box>
  );
}