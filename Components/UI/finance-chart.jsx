import PieChart from "react-native-pie-chart";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import Plus from "../../assets/plus.js";
import { useState } from "react";
import { Link } from "expo-router";
export default function FinanceChart({ serie, totalExpense }) {
  const [selected, setSelected] = useState("Mes");
  const widthAndHeight = 250;

  return (
    <View
      className="flex flex-col justify-center items-center bg-white mx-7 py-5 rounded-xl"
      style={[styles.shadow]}
    >
      <View className="flex flex-row justify-between w-full px-12  mb-7">
        <Pressable onPress={() => setSelected("Mes")}>
          <Text
            className="text-xl"
            style={{
              fontFamily: "CharlieDisplay-Bold",
              color: selected === "Mes" ? "#61B250" : "black",
            }}
          >
            Mes
          </Text>
        </Pressable>

        <Pressable onPress={() => setSelected("Semana")}>
          <Text
            className="text-xl"
            style={{
              fontFamily: "CharlieDisplay-Bold",
              color: selected === "Semana" ? "#61B250" : "black",
            }}
          >
            Semana
          </Text>
        </Pressable>

        <Pressable onPress={() => setSelected("Año")}>
          <Text
            className="text-xl"
            style={{
              fontFamily: "CharlieDisplay-Bold",
              color: selected === "Año" ? "#61B250" : "black", // Cambia el color si está seleccionado
            }}
          >
            Año
          </Text>
        </Pressable>
      </View>
      <View className="h-100 relative bg-white">
        <PieChart widthAndHeight={widthAndHeight} series={serie} cover={0.45} />
        <View className="absolute inset-0 justify-center items-center ">
          <View className="flex flex-row justify-center">
            <Text
              className="text-2xl text-orange-600"
              style={{ fontFamily: "CharlieDisplay-Black" }}
            >
              $
            </Text>
            <Text
              className="text-2xl text-orange-600"
              style={{ fontFamily: "CharlieDisplay-Black" }}
            >
              {totalExpense}
            </Text>
          </View>
        </View>
      </View>
      <Link href="/finance-form" asChild className="absolute right-4 bottom-4">
        <Pressable className=" w-12 h-12 rounded-full bg-[#F5D69D] items-center justify-center shadow-lg">
          <SvgXml xml={Plus} />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#989898",
    shadowOffset: {
      width: 2,
      height: 2,
    },

    shadowRadius: 10,
    elevation: 10,
  },
});
