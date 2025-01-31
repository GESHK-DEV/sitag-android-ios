import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { SvgXml } from "react-native-svg";
import Logo from "../../assets/header-logo.js";
import { LinearGradient } from "expo-linear-gradient";
import Burger from "../../assets/burger.js";
import { useNavigation } from "expo-router";

export default function FinanceHeader() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#0B6E4F", "#6BBF59"]}
      start={{ x: 0, y: -0.9 }}
      end={{ x: 0, y: 1 }}
      style={styles.redondeado}
      className="flex flex-col"
    >
      <View className="flex flex-row justify-around pb-4 pt-8 ">
        <SvgXml xml={Logo} />
        <Text
          className="text-white text-4xl mt-4"
          style={{ fontFamily: "Roboto_900Black" }}
        >
          SITAG
        </Text>
        <View className="mt-2">
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <SvgXml xml={Burger} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-col  pb-4 pt-8">
        <Text
          className="text-white text-center text-3xl"
          style={{ fontFamily: "CharlieDisplay-Semibold" }}
        >
          Total
        </Text>
        <View className="flex flex-row justify-center">
          <Text
            className="text-white text-center text-3xl"
            style={{ fontFamily: "CharlieDisplay-Black" }}
          >
            $
          </Text>
          <Text
            className="text-white text-center text-3xl"
            style={{ fontFamily: "CharlieDisplay-Black" }}
          >
            500.50
          </Text>
        </View>
        <View className="flex flex-row justify-between mt-7 mb-2 mx-16">
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
