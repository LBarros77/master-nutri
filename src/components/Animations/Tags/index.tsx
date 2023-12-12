import { View, Text, Alert } from 'react-native';
import { createBox } from '@shopify/restyle';
import Animated, { Layout } from 'react-native-reanimated';
import * as Clipboard from 'expo-clipboard';

import { ButtonIcon } from '../../Controllers/ButtonIcon';
import { Tag } from '../Tag';
import { ThemeProps } from '../../../assets/theme';
import { styles } from './styles';

type Props = {
  tags: string[];
  setTags: (tags: React.SetStateAction<string[]>) => void;
}

const Box = createBox<ThemeProps>()

export function Tags({ tags, setTags }: Props) {

  function handleCopyToClipboard() {
    const tagsFormatted = tags.toString().replaceAll(",", " ");

    Clipboard
      .setStringAsync(tagsFormatted)
      .then(() => Alert.alert('Copiado!'))
      .catch(() => Alert.alert('Não foi possível copiar!'));
  }

  function handleRemove(tag: string) {
    Alert.alert(
      'Remover Tag',
      `Remover a tag "${tag}"?`,
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => setTags((prevState) => prevState.filter((item) => item !== tag))
        }
      ]
    );
  }

  return (
    <Box mx="m" borderRadius={10} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {tags.length} tags
        </Text>

        <ButtonIcon
          iconName="copy"
          onPress={handleCopyToClipboard}
        />
      </View>

      <Animated.View
        style={styles.content}
        layout={Layout}
      >
        {
          tags.map((tag) => (
            <Tag
              key={tag}
              title={tag}
              onPress={() => handleRemove(tag)}
            />
          ))
        }
      </Animated.View>
    </Box>
  );
}