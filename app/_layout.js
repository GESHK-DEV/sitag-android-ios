import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

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
    <PaperProvider>
      <StatusBar style="light" hidden={true} />
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Drawer
          screenOptions={{
            headerShown: false, // Oculta el header predeterminado
            drawerPosition: "right", // Drawer se abre de derecha a izquierda
          }}
        >
          <Drawer.Screen
            name="index"
            options={{ drawerLabel: "Home", title: "Overview" }}
          />
          <Drawer.Screen
            name="login"
            options={{ drawerLabel: "Login", title: "Overview" }}
          />
          <Drawer.Screen
            name="register"
            options={{ drawerLabel: "register", title: "Overview" }}
          />
          <Drawer.Screen
            name="insFarm"
            options={{ drawerLabel: "Farm", title: "Overview" }}
          />
          <Drawer.Screen
            name="dailyActiv"
            options={{ drawerLabel: "Activity", title: "Overview" }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}
