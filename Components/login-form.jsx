import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importa AsyncStorage
import InputText from "./UI/inputs";
import FillButton from "./UI/button";
import { loginUser } from "../Services/API/auth";

export default function LoginForm() {
  {
    /* Esto es para la validacion del login, NO BORRAR*/
  }

  {
    /* 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await loginUser(email, password);
      console.log("Respuesta de la API:", response);

      if (!response.success) {
        throw new Error(response.error);
      }

      const userData = response.data; // Extrae los datos JSON
      console.log("Datos de la API:", userData);

      if (userData.key) {
        await AsyncStorage.setItem("userKey", userData.key);
        console.log("Key guardada con éxito");
        Alert.alert("Éxito", "Inicio de sesión exitoso");
        router.push("/");
      } else {
        throw new Error("No se recibió una key válida");
      }
    } catch (error) {
      console.error("Error detallado:", error);
      Alert.alert(
        "Error",
        error.message || "No se pudo iniciar sesión. Verifica tus credenciales."
      );
    }
  };
*/
  }
  return (
    <View className="mt-9">
      <View className="flex flex-col gap-9">
        <InputText
          placeholder="Correo"
          type="email"
          // onChangeText={setEmail}
          // value={email}
        />
        <InputText
          placeholder="Contraseña"
          type="password"
          // onChangeText={setPassword}
          //value={password}
        />
        <View className="mx-14">
          <FillButton
            text="Iniciar Sesión"
            textColor="white"
            textSize="2xl"
            // onPress={handleLogin}
          />
        </View>
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
