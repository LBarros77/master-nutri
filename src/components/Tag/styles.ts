import { StyleSheet } from 'react-native';
import { colors } from '../../assets/theme/colors';
import { textVariants } from '../../assets/theme/textVariants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GRAY_600,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 5,
  },
  title: {
    color: colors.GRAY_300,
    fontFamily: textVariants.fontFamily.primary.regular,
    fontSize: textVariants.size.sm,
  }
});