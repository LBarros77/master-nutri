import { View} from 'react-native';
import styles from '../../assets/styles/styles';
import { Header } from '../partials/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}