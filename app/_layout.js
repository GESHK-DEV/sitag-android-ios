import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { ThemeProvider } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import "../global.css"; // Asegúrate de que la ruta sea correcta
import { useEffect } from "react";
import {
  Roboto_400Regular,
  Roboto_900Black,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    "Charlie-display": require("../assets/fonts/charlie-display.ttf"),
    "Charlie-display-3": require("../assets/fonts/charlie-display-3.ttf"),
    "Charlie-display-semibold": require("../assets/fonts/charlie-display-semibold.ttf"),
    "Charlie-display-bold": require("../assets/fonts/charlie-display-bold.ttf"),
    Roboto_900Black,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar style="light" hidden={true} />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
