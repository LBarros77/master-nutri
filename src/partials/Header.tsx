import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';
import styles from '@/assets/styles/styles';
import Logo from '@/assets/images/logo.svg';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Nutrição personalizada: alimente seu corpo, transforme sua vida!</Text>
        <Link href="@/images/menu" asChild>
          <Button title="Meu Cardápio" />
        </Link>
      </View>
      <View>
        <Logo width={20} height={20} />
      </View>
    </View>
  )
}