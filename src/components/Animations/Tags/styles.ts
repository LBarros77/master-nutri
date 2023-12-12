import { StyleSheet } from 'react-native';
import { textVariants } from '../../../assets/theme/textVariants';
import { colors } from '../../../assets/theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GRAY_500,

    paddingBottom: 100
  },
  header: {
    paddingHorizontal: 32,
    paddingVertical: 16,

    borderBottomColor: colors.GRAY_400,
    borderBottomWidth: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: colors.GRAY_300,
    fontFamily: textVariants.fontFamily.primary.regular,
    fontSize: textVariants.size.md,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 32,
    gap: 12,
  }
});