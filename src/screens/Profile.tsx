import { ScrollView } from "react-native";
import { createBox, createText } from "@shopify/restyle";
import SvgUri from "react-native-svg-uri";

import { ThemeProps } from "../assets/theme";
import { Accordion } from "../components/Controllers/Accordion";
import { settings } from "../data/data";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export default function Profile() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Box p="l" mt="xl" mb="l">
        <SvgUri width={200} height={200} source={require("../assets/images/man-svgrepo-com.svg")} />
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        {settings.map((value, index) => {
          return <Accordion value={value} key={index} type={value.type} />;
        })}
      </ScrollView>
    </Box>
  )
}