import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/theme/colors';
import { textVariants } from '../../../assets/theme/textVariants';

export const styles = StyleSheet.create({
  container: {
    miHeight: 64,
    maxHeight: 64,
    borderRadius: 10,
    padding: 8,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.orangePrimary
  },
  title: {
    color: colors.white,
    fontFamily: textVariants.fontFamily.primary.bold,
    fontSize: textVariants.size.md,
  },
  disabled: {
    opacity: 0.5
  }
});