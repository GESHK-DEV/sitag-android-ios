import { View } from "react-native";
import InputText from "./UI/inputs";
import FillButton from "./UI/button";
import GradiantButton from "./UI/gradiant-button";
import { Link } from "expo-router";
export default function RegisterForm() {
  return (
    <View className="mt-9 flex gap-12 justify-center flex-col">
      <InputText placeholder="Nombre" />
      <InputText placeholder="Apellido" />
      <InputText placeholder="Correo" type="email" />
      <InputText placeholder="Contraseña" type="password" />
      <InputText placeholder="Telefono" type="tel" />
      <View className="flex flex-row justify-center items-center gap-0 mr-3">
        <Link href="/login" asChild>
          <GradiantButton text="Registrarse" />
        </Link>

        <Link href="/" asChild>
          <FillButton text="Cancelar" textColor="white" textSize="xl" />
        </Link>
      </View>
    </View>
  );
}
