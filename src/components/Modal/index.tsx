import { ReactNode } from 'react';
import { BlurView } from 'expo-blur';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Modal as ReactNativeModal, ModalProps, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { colors } from '../../assets/theme/colors';

const BlurViewAnimated = Animated.createAnimatedComponent(BlurView);

type Props = ModalProps & {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ title, children, onClose, ...rest }: Props) {
  return (
    <ReactNativeModal transparent  {...rest}>
      <BlurViewAnimated
        style={styles.overlay}
        entering={FadeIn}
        intensity={4}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {title}
            </Text>

            <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
              <MaterialIcons
                name="close"
                size={24}
                color={colors.GRAY_400}
              />
            </TouchableOpacity>
          </View>

          {children}
        </View>
      </BlurViewAnimated>
    </ReactNativeModal>
  );
}