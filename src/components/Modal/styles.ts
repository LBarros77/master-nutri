import { StyleSheet } from 'react-native';
import { colors } from '../../assets/theme/colors';
import { textVariants } from '../../assets/theme/textVariants';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.GRAY_900,
    fontFamily: textVariants.fontFamily.primary.bold,
    fontSize: textVariants.size.xl,

    textAlign: "center",
    marginBottom: 16
  },
  content: {
    margin: 32,
    padding: 32,
    backgroundColor: colors.GRAY_200,
    borderRadius: 12,
    gap: 12,
  }
});