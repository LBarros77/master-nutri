import { View, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../assets/theme/colors";
import { styles } from "./styles";

type Props = TextInputProps & {
  onClear?: () => void;
}

export function TextArea({ value, editable, onClear, ...rest }: Props) {
  return (
    <View style={[styles.container, !editable && styles.disabled]}>
      <TextInput
        // style={styles.input}
        placeholderTextColor={colors.GRAY_300}
        multiline
        value={value}
        editable={editable}
        {...rest}
      />

      {
        onClear && value && value?.length > 0 &&
        <TouchableOpacity
          style={styles.clear}
          onPress={onClear}
        >
          <MaterialIcons
            name="close"
            size={16}
            color={colors.GRAY_300}
          />
        </TouchableOpacity>
      }
    </View>
  );
}