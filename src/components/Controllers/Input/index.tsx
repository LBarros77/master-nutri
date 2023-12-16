import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { colors } from "../../../assets/theme/colors";

export function Input({...props}: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={colors.GRAY_300}
      {...props}
    />
  )
}