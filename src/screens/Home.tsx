import { createBox, createText } from "@shopify/restyle";
import SvgUri from 'react-native-svg-uri';
import { ScrollView, StyleSheet, View } from "react-native";

import { Button } from "../components/Button";
import { ThemeProps } from "../assets/theme";
import { Header } from "../components/Header";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export default function Home() {
  return (
    <Box flex={1} position="relative" mt="xl" ml="m" mr="m" mb="m">
      <Header title="Master Nutri" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box flex={1} flexDirection="row" justifyContent="center" alignItems="center" bg="orangeLight" borderRadius={10} my="m" py="m">
          <View style={{width: 180}}>
            <Text variant="title" mb="m">Nutrição personalizada!</Text>
            <Button title="Meu Cardápio" />
          </View>
          <View>
            <SvgUri width="180" height="180" source={require("../assets/images/Group_1.svg")} />
          </View>
        </Box>

        <Box flex={2} flexDirection="column" my="m">

          <Box flexDirection="column">
            <Text variant="sub_title" >Categórias</Text>
          </Box>
          <Box flexWrap="wrap" flexDirection="row" position="relative" gap="m" alignItems="center" justifyContent="center">
            <Box p="m" borderRadius={10} bg="redLight" alignItems="center">
              <SvgUri width="140" height="100" source={require("../assets/images/categories/tea-svgrepo-com.svg")} />
              <Text color="GRAY_400" fontWeight="700" fontSize={20}>Chá</Text>
            </Box>
            <Box p="m" borderRadius={10} bg="redLight" alignItems="center">
              <SvgUri width="140" height="100" source={require("../assets/images/categories/pill-svgrepo-com.svg")} />
              <Text color="GRAY_400" fontWeight="700" fontSize={20}>Remédio</Text>
            </Box>
            <Box p="m" borderRadius={10} bg="redLight" alignItems="center">
              <SvgUri width="140" height="100" source={require("../assets/images/categories/light-bulb-svgrepo-com.svg")} />
              <Text color="GRAY_400" fontWeight="700" fontSize={20}>Ideia</Text>
            </Box>
            <Box p="m" borderRadius={10} bg="redLight" alignItems="center">
              <SvgUri width="140" height="100" source={require("../assets/images/categories/file-1-svgrepo-com.svg")} />
              <Text color="GRAY_400" fontWeight="700" fontSize={20}>Receita</Text>
            </Box>
          </Box>

          <Box flexDirection="row" justifyContent="center" alignItems="center" bg="orangeLight" borderRadius={10} my="m" py="m" gap="m">
            <SvgUri width="100" height="100" source={require("../assets/images/calendar-svgrepo-com.svg")} />
            <Text style={styles.paragraph} >Mantenha uma rotina de alimentação sldável.</Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  )
}

const styles = StyleSheet.create({
  paragraph: {
    fontWeight: "bold",
  }
})