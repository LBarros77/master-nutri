import { View, Text, Button } from 'react-native';
import styles from '../assets/styles/styles';
import SvgUri from 'react-native-svg-uri';

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.rowCols2}>
        <View style={{width: 200}}>
          <Text style={styles.h2}>Nutrição personalizada: Alimente seu corpo, transforme sua vida!</Text>
          <Button title="Meu Cardápio" />
        </View>
        <View>
          <SvgUri width="180" height="180" source={require("../assets/images/Group_1.svg")} />
        </View>
      </View>
    </View>
  )
}