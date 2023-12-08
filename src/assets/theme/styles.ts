import { StyleSheet } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  rowCols2: {
    flexDirection: "row"
  },
  h2: {
    fontSize: 20,
    fontWeight: "600"
  },
  content: {
    padding: 32,
    gap: 16,
    backgroundColor: colors.GRAY_600,
  },
  options: {
    flexDirection: 'row',
    gap: 7
  }
});

export default styles;