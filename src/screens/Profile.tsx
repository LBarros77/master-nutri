import { View, Text } from 'react-native';
import styles from '../assets/theme/styles';

export default function Profile() {
  return (
    <View style={styles.header}>
      <View style={styles.rowCols2}>
        <View style={{width: 200}}>
          <Text style={styles.h2}>Nutrição personalizada: Alimente seu corpo, transforme sua vida!</Text>
          {/* <Button title="Meu Cardápio" /> */}
        </View>
        <View>
          {/* <SvgUri width="180" height="180" source={require("../assets/images/Group_1.svg")} /> */}
        </View>
      </View>
    </View>
  )
}