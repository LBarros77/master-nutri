import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { colors } from '../../assets/theme/colors';
import { textVariants } from '../../assets/theme/textVariants';

console.log(initialWindowMetrics)
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingTop: (initialWindowMetrics?.insets.top || 0) + 44,
    backgroundColor: colors.orangePrimary,
    padding: 16,
    borderRadius: 4,
  },
  text: {
    color: colors.GRAY_200,
    fontSize: textVariants.size.sm,
    fontFamily: textVariants.fontFamily.primary.regular,
    textAlign: 'center',
  }
});