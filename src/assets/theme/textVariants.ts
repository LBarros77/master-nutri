import { colors } from "./colors"

export const textVariants = {
  defaults: {
    color: 'black',
    fontFamily: "NotoSans_400Regular",
  },
  title: {
    fontSize: 24,
  },
  label: {
    fontSize: 16
  },
  sub_title: {
    fontSize: 24,
  },
  btn_primary: {
    fontSize: 16,
    color: colors.white,
  },
  btn_secundary: {
    fontSize: 16,
    color: colors.orangeDark,
  },
  fontFamily: {
    primary: {
      regular: "NotoSans_400Regular",
      bold: "NotoSans_700Bold",
      extraBold: "NotoSans_800ExtraBold",
    }
  },
  size: {
    xs: 12,
    sm: 14,
    md: 18,
    lg: 20,
    xl: 24,
    xxl: 32,
  }
}