import { View, Text, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import Logo from "../assets/header-logo.js";
import { LinearGradient } from "expo-linear-gradient";
import Burger from "../assets/burger.js";

export default function Header() {
  return (
    <LinearGradient
      colors={["#0B6E4F", "#6BBF59"]}
      start={{ x: 0, y: -0.9 }}
      end={{ x: 0, y: 1 }}
      className="flex flex-row justify-around pb-4 pt-8 "
    >
      <SvgXml xml={Logo} />
      <Text
        className="text-white text-4xl mt-4"
        style={{ fontFamily: "Roboto_900Black" }}
      >
        SITAG
      </Text>
      <View className="mt-2">
        <SvgXml xml={Burger} />
      </View>
    </LinearGradient>
  );
}
