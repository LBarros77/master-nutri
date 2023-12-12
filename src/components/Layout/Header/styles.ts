import { StyleSheet } from "react-native";
import { textVariants } from "../../../assets/theme/textVariants";
import { colors } from "../../../assets/theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    padding: 32,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: textVariants.fontFamily.primary.bold,
    fontSize: textVariants.size.lg,
    color: colors.GRAY_200,

    textAlign: "center",
    paddingHorizontal: 16
  }
});