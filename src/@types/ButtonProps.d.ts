export type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
}