import { TextInput, TextInputProps } from "react-native";
import { colors } from "../../../assets/theme/colors";
import { styles } from "./styles";

export function Input({...rest}: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={colors.GRAY_300}
    />
  )
}