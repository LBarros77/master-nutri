import Routes from './src/routes';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/assets/theme';
import { StatusBar } from 'expo-status-bar';
import { useFonts, NotoSans_400Regular, NotoSans_700Bold, NotoSans_800ExtraBold } from "@expo-google-fonts/noto-sans";
import { Loading } from "./src/components/Loading/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_700Bold,
    NotoSans_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor='transparent' translucent />
      <Routes />
    </ThemeProvider>
  );
}
