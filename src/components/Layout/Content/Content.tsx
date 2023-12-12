import { View, Text, Alert } from 'react-native';
import { createBox } from '@shopify/restyle';
import * as Clipboard from 'expo-clipboard';

import { ButtonIcon } from '../../Controllers/ButtonIcon';
import { ThemeProps } from '../../../assets/theme';
import { styles } from './styles';

type Props = {
  content: string;
  setContent: (content: React.SetStateAction<string>) => void;
}

const Box = createBox<ThemeProps>()

export function Content({ content, setContent }: Props) {

  function handleCopyToClipboard() {
    const contentFormatted = content.toString().replaceAll(",", " ");

    Clipboard
      .setStringAsync(contentFormatted)
      .then(() => Alert.alert('Copiado!'))
      .catch(() => Alert.alert('Não foi possível copiar!'));
  }

  return (
    <Box mx="m" borderRadius={10} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {content}
        </Text>

        <ButtonIcon
          iconName="copy"
          onPress={handleCopyToClipboard}
        />
      </View>
    </Box>
  );
}