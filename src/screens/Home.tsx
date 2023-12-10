import { createBox, createText } from "@shopify/restyle";
import SvgUri from 'react-native-svg-uri';
import { ScrollView, View } from "react-native";

import { Button } from "../components/Button";
import { ThemeProps } from "../assets/theme";
import { Header } from "../components/Header";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export default function Home() {
  return (
    <Box flex={1} position="relative" mt="xl" ml="m" mr="m" mb="m">
      <Header title="Master Nutri" />
      {/* <Text textAlign="center" color="GRAY_200">Alimente seu corpo, transforme sua vida!</Text> */}
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
            <Text variant="title" >Categórias</Text>
          </Box>
          <Box flexWrap="wrap" flexDirection="row" alignItems="center" justifyContent="center" gap="m">
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

          <Box flexDirection="row" justifyContent="center" alignItems="center" bg="orangeLight" borderRadius={10} gap="m" my="m" p="m">
            <SvgUri width="100" height="100" source={require("../assets/images/calendar-svgrepo-com.svg")} />
            <Text fontWeight="bold" style={{width: 240}}>Mantenha uma rotina de alimentação sldável.</Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  )
}