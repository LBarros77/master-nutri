import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function Tag({ title, ...props }: Props) {
  return (
    <TouchableOpacityAnimated
      style={styles.container}
      entering={FadeIn}
      exiting={FadeOut}
      layout={Layout}
      {...props}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacityAnimated>
  );
}