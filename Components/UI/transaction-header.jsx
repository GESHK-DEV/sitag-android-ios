import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Pressable } from "react-native";
import IconsLibrary from "./icons-library";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function TransactionHeader() {
  return (
    <LinearGradient
      colors={["#0B6E4F", "#6BBF59"]}
      start={{ x: 0, y: -0.9 }}
      end={{ x: 0, y: 1 }}
      style={styles.redondeado}
      className="flex flex-col  "
    >
      <View className="flex flex-row mt-10 gap-5 pb-5 mx-6">
        <IconsLibrary
          IconComponent={AntDesign}
          iconName="left"
          iconSize={33}
          iconColor="#fff"
        />
        <Text
          className=" text-white text-3xl"
          style={{ fontFamily: "Roboto_900Black" }}
        >
          Añadir Transacción
        </Text>
      </View>
      <View className="flex flex-row justify-between mt-2 mb-2 mx-16">
        <Pressable className="bg-[#A0E060] px-3 py-1 rounded-xl">
          <Text
            className="text-[#1C5754] text-2xl"
            style={{ fontFamily: "CharlieDisplay-Semibold" }}
          >
            Gastos
          </Text>
        </Pressable>
        <Pressable>
          <Text
            className="text-white text-2xl"
            style={{ fontFamily: "CharlieDisplay-Semibold" }}
          >
            Ingresos
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  redondeado: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
