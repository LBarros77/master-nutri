import { ThemeProps } from "../../assets/theme";
import { createBox, createText } from "@shopify/restyle";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useAnimatedRef,
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  runOnUI,
  measure,
  withTiming
} from "react-native-reanimated";

import { SettingsProps } from "../../data/data";
import { styles } from "./styles";

type AccordionProps = {
  value: SettingsProps,
  type: string
};

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function Accordion({value, type}: AccordionProps) {
  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  return (
    <Box my="m" overflow="hidden">
      <Box flexDirection="row" alignItems="center" gap="xl">
        <Ionicons name={value.icon} color="#ff8474" size={24} />
        <Pressable
          onPress={() => {
            if (heightValue.value === 0) {
              runOnUI(() => {
                'worklet';
                heightValue.value = withTiming(measure(listRef)!.height);
              })();
            } else {
              heightValue.value = withTiming(0);
            }
            open.value = !open.value;
          }}
        >
          <Text variant="title2" color="GRAY_300" fontWeight="600">{value.title}</Text>
        </Pressable>
      </Box>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View style={styles.contentContainer} ref={listRef}>
          {type === 'regular' &&
            value.content.map((v, i) => {
              return (
                <Box key={i} p="s">
                  <Text variant="title2" color="GRAY_300" fontWeight="500">{v}</Text>
                </Box>
              );
            })}
        </Animated.View>
      </Animated.View>
    </Box>
  );
};
