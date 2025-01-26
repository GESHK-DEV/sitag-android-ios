import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import CardComponent from "../Components/cards.jsx";
import Header from "../Components/header.jsx";
import CardMenu from "../Components/cards.jsx";

export default function Home() {
  return (
    <View>
      <Header />

      <Text
        className="text-center text-[#314D4D] text-2xl mt-16"
        style={{ fontFamily: "Roboto_900Black" }}
      >
        ¿Qué le Interesa Hacer?
      </Text>

      <CardMenu />
    </View>
  );
}
