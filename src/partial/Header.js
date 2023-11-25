import { Pressable, View } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import styles from '../assets/styles/styles';

export function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text>Nutrição personalizada: alimente seu corpo, transforme sua vida!</Text>
                <Link href="../pages/form-menu">
                    <Pressable>
                        <Text>Meu Cardápio</Text>
                    </Pressable>
                </Link>
            </View>
            <View>
                <Image
                    source="../assets/Group 1.svg"
                    placeholder="Imagem de um prato pronto com ingredientes bem colocados"
                    contentFit="cover"
                    transition={1000}
                />
            </View>
        </View>
    )
}