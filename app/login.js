import { Text, View, StyleSheet, Dimensions } from "react-native";
import LoginForm from "../Components/login-form.jsx";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import fondo from "../assets/gradient.js";
import grass from "../assets/grass.js";

const { width } = Dimensions.get("window");
export default function Home() {
  return (
    <View>
      <SvgXml xml={fondo} width={width} />

      <Text
        className="text-center text-[#314D4D] text-2xl mt-14"
        style={{ fontFamily: "Roboto_700Bold" }}
      >
        Bienvenido, Buen día!
      </Text>

      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: "30%",
    left: "43%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});
