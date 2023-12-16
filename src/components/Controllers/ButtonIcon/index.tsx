import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { ActivityIndicator, Pressable, PressableProps } from 'react-native';

import { colors } from '../../../assets/theme/colors';
import { styles } from './styles';

type Props = PressableProps & {
  isLoading?: boolean;
  size?: 'primary_size' | 'secondary_size';
  iconName: keyof typeof Entypo.glyphMap;
  onPressIn?: () => void;
  onPressOut?: () => void;
}

export function ButtonIcon({
  iconName,
  size = "primary_size",
  isLoading = false,
  onPressIn = () => { },
  onPressOut = () => { },
  ...props
}: Props) {
  const [isActive, setIsActive] = useState(false);

  function handleOnPressIn() {
    setIsActive(true);
    onPressIn();
  }

  function handleOnPressOut() {
    setIsActive(false);
    onPressOut();
  }

  return (
    <Pressable
      style={[
        styles.container,
        styles[size],
        isActive ? styles.active : styles.inative
      ]}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      disabled={isLoading}
      {...props}
    >
      {
        isLoading
          ?
          <ActivityIndicator
            color={colors.GRAY_200}
            size="small"
          />
          :
          <Entypo
            name={iconName}
            size={size === 'primary_size' ? 24 : 32}
            color={colors.GRAY_300}
          />
      }
    </Pressable>
  );
}