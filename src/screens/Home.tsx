import { View, Text } from 'react-native';
import styles from '@styles/styles';
import { Header } from '@/partials/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}