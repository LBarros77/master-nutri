import {createTheme} from '@shopify/restyle';
import { colors } from './colors';
import { spacing } from './spacing';
import { textVariants } from './textVariants';
import { buttonVariants } from './buttonVariants';

const theme = createTheme({
  colors,
  spacing,
  textVariants,
  buttonVariants
});

export type ThemeProps = typeof theme;
export default theme;