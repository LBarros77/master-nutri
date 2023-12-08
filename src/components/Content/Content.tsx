import { View, Text, Alert } from 'react-native';
import { createBox } from '@shopify/restyle';
import * as Clipboard from 'expo-clipboard';

import { StyleSheet } from 'react-native';
import { textVariants } from '../../assets/theme/textVariants';
import { colors } from '../../assets/theme/colors';
import { ButtonIcon } from '../ButtonIcon';

import { ThemeProps } from '../../assets/theme';

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

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orangeLight,

    paddingBottom: 100
  },
  header: {
    paddingHorizontal: 32,
    paddingVertical: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: colors.GRAY_300,
    fontFamily: textVariants.fontFamily.primary.regular,
    fontSize: textVariants.size.md,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 32,
    gap: 12,
  }
});