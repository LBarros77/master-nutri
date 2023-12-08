import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator } from 'react-native';
import { colors } from '../../assets/theme/colors';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}

export function Button({ isLoading = false, title, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, isLoading && styles.disabled]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {
        isLoading
          ?
          <ActivityIndicator
            color={colors.GRAY_200}
            size="small"
          />
          :
          <Text style={styles.title}>
            {title}
          </Text>
      }
    </TouchableOpacity>
  );
}