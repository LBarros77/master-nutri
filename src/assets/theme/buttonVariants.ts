import { colors } from "./colors"

export const buttonVariants = {
  defaults: {
    height: 56,
    alignItems: "center",
    boderRadius: 10,
    fontSize: 16,
  },
  primary: {
    color: colors.white,
    backgroundColor: colors.orangePrimary
  },
  secundary: {
    color: colors.orangeDark,
    backgroundColor: colors.orangeLight
  },
  success: {
    color: colors.white,
    backgroundColor: colors.greenPrimary
  }
}
