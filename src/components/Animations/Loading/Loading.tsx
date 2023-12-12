import { View, ActivityIndicator } from "react-native";
import { colors } from "../../../assets/theme/colors";
import { styles } from "./styles";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.orangePrimary} />
    </View>
  );
}