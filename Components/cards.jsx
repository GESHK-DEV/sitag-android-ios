// components/cards.jsx
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text, StyleSheet, Pressable } from "react-native";
import IconsLibrary from "./UI/icons-library";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";
export default function CardMenu() {
  return (
    <View className="flex flex-col justify-center items-center mt-14 gap-9">
      {/* card de ver resumen */}
      <Link href="/summary" asChild>
        <Pressable>
          <View
            className="flex flex-col justify-center items-center border-2 py-4 px-12 rounded-xl border-[#126260] "
            onPress={() => console.log("hola")}
          >
            <IconsLibrary
              IconComponent={Ionicons}
              iconColor="#126260"
              iconSize={83}
              iconName="newspaper-outline"
            />

            <Text
              style={{ fontFamily: "Roboto_700Bold" }}
              className="text-xl text-[#0b4443]"
            >
              Ver Resumén
            </Text>
          </View>
        </Pressable>
      </Link>

      {/* card de ver finanzas */}
      <View className="flex flex-col justify-center items-center border-2 py-4 px-12 rounded-xl border-[#126260]">
        <IconsLibrary
          IconComponent={MaterialCommunityIcons}
          iconColor="#126260"
          iconSize={83}
          iconName="finance"
        />

        <Text
          style={{ fontFamily: "Roboto_700Bold" }}
          className="text-xl text-gray-600"
        >
          Ver Finanzas
        </Text>
      </View>

      {/* card de inspeccionar fincas */}
      <View className="flex flex-col justify-center items-center border-2 p-4 rounded-xl border-[#126260]">
        <IconsLibrary
          IconComponent={MaterialCommunityIcons}
          iconColor="#126260"
          iconSize={83}
          iconName="map-search-outline"
        />

        <Text
          style={{ fontFamily: "Roboto_700Bold" }}
          className="text-xl text-gray-600"
        >
          Inspeccionar Fincas
        </Text>
      </View>
    </View>
  );
}
