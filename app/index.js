import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import CardComponent from "../Components/cards.jsx";
import Header from "../Components/header.jsx";
import CardMenu from "../Components/cards.jsx";
import { CardActivity } from "../Components/cards.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SummaryDashboard from "../Components/summary-dashboard";
import { Button } from "react-native-paper";
import { useEffect, useState } from "react";
export default function Home() {
  {
    /* Esto es para obtener datos de la cache, NO BORRAR*/
  }
  {
    /* 
  const [key, setKey] = useState(null);
  const keyrecover = async () => {
    try {
      const userkey = await AsyncStorage.getItem("userKey");
      if (userkey) {
        console.log("key del usuario", userkey);
        setKey(userkey);
      } else {
        console.log("no hay key");
        setKey(null);
      }
    } catch (error) {
      console.error("error no se: ", error);
      setKey(null);
    }
  };
  useEffect(() => {
    keyrecover();
  }, []);
*/
  }
  return (
    <ScrollView className="bg-white flex-1">
      <View>
        <Header />
        <Text
          className="text-center text-[#314D4D] text-2xl mt-10"
          style={{ fontFamily: "Roboto_900Black" }}
        >
          Bienvenido, Que le Gustaria Hacer
          {/*key ? `User Key :${key}` : "No hay key"*/}
        </Text>
        <SummaryDashboard />

        <CardMenu />
        <View className="flex flex-col gap-5">
          <Text
            className="text-3xl text-center mt-10 text-[#6D5426]"
            style={{ fontFamily: "Roboto_900Black" }}
          >
            Actividades de Hoy
          </Text>
          <View className="flex flex-col gap-5 ">
            <CardActivity />
            <CardActivity />
            <CardActivity />
            <CardActivity />
            <CardActivity />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
