import { View, Text, Button } from 'react-native';
import styles from '@styles/styles';
import Logo from '@images/logo.svg';
import { NavigationContainer } from '@react-navigation/native';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Nutrição personalizada: alimente seu corpo, transforme sua vida!</Text>
        <NavigationContainer
          linking={{
            prefixes: ["exp://192.168.1.107:8081/--/masternutri"],
            config: {
              screens: {
                menu: {
                  path: "menu"
                }
              },
            },
          }}
        >
          <Button title="Meu Cardápio" />
        </NavigationContainer>
      </View>
      <View>
        <Logo width={20} height={20} />
      </View>
    </View>
  )
}