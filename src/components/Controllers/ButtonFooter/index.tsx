import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { createText } from "@shopify/restyle";
import { Ionicons } from "@expo/vector-icons";

import { ThemeProps } from "../../../assets/theme";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const Text = createText<ThemeProps>();

export function ButtonFooter({title, icon, ...props}: ButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}