import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { createBox, createText } from "@shopify/restyle";
import { Ionicons } from "@expo/vector-icons";

import { ThemeProps } from "../../../assets/theme";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function ButtonFooter({title, icon, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}