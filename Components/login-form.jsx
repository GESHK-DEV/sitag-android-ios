import InputText from "./UI/inputs";
import FillButton from "./UI/button";
import { View, Text } from "react-native";

export default function LoginForm() {
  return (
    <View className="mt-9">
      <View className="flex flex-col gap-9">
        <InputText placeholder="Correo" type="email" />
        <InputText placeholder="Contraseña" type="password" />
        <FillButton
          text="Iniciar Sesión"
          Bcolor="#6BBF59"
          textColor="white"
          textSize="2xl"
        />
      </View>
      <View className="flex flex-row justify-center gap-1">
        <Text
          className="text-center mt-2"
          style={{ fontFamily: "Roboto_400Regular" }}
        >
          No Tienes Cuenta?
        </Text>
        <Text
          className="text-center mt-2 text-green-600"
          style={{ fontFamily: "Roboto_500Medium" }}
        >
          Crear Una
        </Text>
      </View>
    </View>
  );
}
