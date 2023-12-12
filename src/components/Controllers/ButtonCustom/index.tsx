import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { createText } from "@shopify/restyle";
import { Ionicons } from "@expo/vector-icons";

import theme, { ThemeProps } from "../../../assets/theme";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const Text = createText<ThemeProps>();

export function ButtonCustom({title, icon, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      {icon.length in Ionicons && 
        <Ionicons name={icon} size={24} color={theme.colors.orangePrimary} />
      }
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}