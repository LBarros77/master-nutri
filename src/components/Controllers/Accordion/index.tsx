import { useRef, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
import { createBox, createText } from "@shopify/restyle";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";

import { AccordionProps } from "../../../@types/AccordionProps";
import { ThemeProps } from "../../../assets/theme";
import { auth } from "../../../services/firebase/firebaseConfig";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function Accordion({value, ...props}: AccordionProps) {
  const [showContent, setShowContent] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  function toggleListItem() {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    setShowContent(!showContent && props.type === "regular");
    if(value.title === "Sair") SignOut();
  };

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  async function SignOut() {
    await signOut(auth)
      .catch(error => console.log(error.message))
  }

  return (
    <Box gap="s" position="relative">
      <TouchableOpacity onPress={() => toggleListItem()}>
        <Box flexDirection="row" justifyContent="flex-start" alignItems="center" gap="m">
          <Box flexDirection="row" alignItems="center" width={250} py="s" my="s" columnGap="m">
            <Ionicons name={value.icon} color="#ff8474" size={24} />
            <Text variant="titleAccordion" color="GRAY_300">{value.title}</Text>
          </Box>
          {props.type === "regular" &&
          <Animated.View style={{transform: [{rotateZ: arrowTransform}], justifyContent: "flex-end"}}>
            <MaterialIcons name="keyboard-arrow-right" size={40} color="#A0A0A7" />
          </Animated.View>
          }
        </Box>
      </TouchableOpacity>
      {showContent && (
        <Box justifyContent="flex-end" overflow="hidden">
          <Text variant="subTitleAccordion" textAlign="center" color="GRAY_300">{value.content}</Text>
        </Box>
      )}
    </Box>
  )
}