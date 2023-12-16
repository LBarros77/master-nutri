import { TouchableOpacity } from "react-native";
import { createText } from "@shopify/restyle";
import { Ionicons } from "@expo/vector-icons";

import theme, { ThemeProps } from "../../../assets/theme";
import { ButtonProps } from "../../../@types/ButtonProps";

const Text = createText<ThemeProps>();

export function ButtonCustom({title, icon, ...props}: ButtonProps) {
  return (
    <TouchableOpacity style={{flexDirection: "row", justifyContent: "center", alignItems: "center", textAline: "center", margin: 16}} {...props}>
      {icon && 
        <Ionicons name={icon} size={24} color={theme.colors.orangePrimary} marginTop={5} maginRight={5} />
      }
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}