import { StyleSheet } from "react-native";
import { colors } from "../../assets/theme/colors";
import { textVariants } from "../../assets/theme/textVariants"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 128,
    borderRadius: 7,
    padding: 16,

    backgroundColor: colors.GRAY_200,
  },
  input: {
    flex: 1,
    color: colors.GRAY_200,
    fontFamily: textVariants.fontFamily.primary,
    fontSize: textVariants.size.md,

    textAlignVertical: 'top',
  },
  clear: {
    height: 22,
    width: 22,
    borderRadius: 11,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    top: 10,
    right: 10,

    backgroundColor: colors.GRAY_400,
  },
  disabled: {
    opacity: 0.5
  }
});