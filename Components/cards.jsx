// components/cards.jsx
import FontAwesome from "@expo/vector-icons/FontAwesome";
<<<<<<< HEAD
import { View, Text, StyleSheet, Pressable } from "react-native";
=======
import { View, Text, StyleSheet, Modal, Pressable, Animated} from "react-native";
import FillButton from "./UI/button";
import GradiantButton from "./UI/gradiant-button";
import  React, { useState, useRef } from "react";
import { Link } from "expo-router";
>>>>>>> 788f33645ef66df8085587212b9cfd863886bb47
import IconsLibrary from "./UI/icons-library";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SvgXml } from "react-native-svg";
import Location from "../assets/location"
import InputText from "./UI/inputs";
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
      <Link href="insFarm">
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
      </Link>
    </View>
  );
}

export function CardFarm() {
  return (
    <View>
      <View
        className="mx-12 rounded-xl overflow-hidden">

        <LinearGradient
          colors={["#0B6E4F", "#6BBF59"]}
          start={{ x: 0, y: -0.9 }}
          end={{ x: 0, y: 1 }}
          className="flex flex-row items-center py-9 px-6">
        <View className="flex-1">
          <Text
            style={{ fontFamily: "Roboto_700Bold" }}
            className="text-2xl text-white">
              Cordillera
          </Text>
          <Text
            style={{ fontFamily: "Roboto_700" }}
            className="text-sm text-white mt-1">
            3 Divisiones
          </Text>
        </View>

          <SvgXml xml={Location} width={60} height={60} />
        </LinearGradient>
    </View>

    <View
      className="mx-12 rounded-xl overflow-hidden mt-6">
      <LinearGradient
        colors={["#0B6E4F", "#6BBF59"]}
        start={{ x: 0, y: -0.9 }}
        end={{ x: 0, y: 1 }}
        className="flex flex-row items-center py-9 px-6"
      >
        <View className="flex-1">
          <Text
            style={{ fontFamily: "Roboto_700Bold" }}
            className="text-2xl text-white">
              Paraiso
          </Text>
          <Text
            style={{ fontFamily: "Roboto_700" }}
            className="text-sm text-white mt-1">
              2 Divisiones
          </Text>
        </View>

        <SvgXml xml={Location} width={60} height={60} />
      </LinearGradient>
    </View>

    </View>    
  );
}


export function AggCardFarm() {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  return(
  <View>
    <Pressable 
        onPress={() =>
          setModalVisible(!modalVisible)}>
      <View
        className="mx-12 rounded-xl py-4 px-6 border-2 overflow-hidden mt-6 border-[#126260]">
          <View className="flex flex-col justify-center items-center">
            <IconsLibrary
              IconComponent={MaterialCommunityIcons}
              iconColor="#126260"
              iconSize={50}
              iconName="plus"
            />
          </View>
      </View>

  </Pressable>

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View className="flex-1 px-8 py-8 justify-center items-center bg-black/50">
        <View className="bg-white w-full rounded-lg border-2 border-[#126260]">
          <Text
            style={{ fontFamily: "Roboto_900Black" }}
            className="text-center text-[#314D4D] text-2xl mt-4 mb-4">
              Ponle un nombre a tu finca
          </Text>

        <View className="w-full"> 
          <View className="mb-4">
            <InputText placeholder="Nombre de la Finca" type="text" />
          </View>
          <View className="mb-4">
            <InputText placeholder="Localización" type="text" />
          </View>
          <View className="mb-4">
            <InputText placeholder="Descripción" type="text" />
          </View>
        </View>

        <View className="flex flex-row justify-center items-center mr-4">
        <GradiantButton
            text="Aceptar"/>
            
            <FillButton
              text="Cancelar"
              Bcolor="#6BBF59"
              textColor="white"
              textSize="xl"
              onPress={closeModal}/>

        </View>
        </View>
      </View>
    </Modal>
  </View>
  );
}

export function CardActivity() {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(100)).current; 

  const toggleExpand = () => {
    Animated.timing(animatedHeight, {
      toValue: expanded ? 100 : 250, 
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  return (
    <Pressable onPress={toggleExpand}>
      <Animated.View
        style={{ height: animatedHeight }}
        className="mx-12 rounded-xl py-4 px-6 border-2 overflow-hidden border-[#126260]">
        <View className="flex flex-row mt-2">
          <IconsLibrary
                IconComponent={MaterialCommunityIcons}
                iconColor="#126260"
                iconSize={50}
                iconName="needle"
          />

          <Text style={{ fontFamily: "Roboto_900Black" }}
              className="text-start text-[#314D4D] text-2xl mt-4 mb-4">Inyecciones</Text>
        </View>
        {expanded && (
          <View className="mt-2">
            <Text className="text-[#314D4D]">
              Categoria: 
            </Text>
            <Text className="text-[#314D4D] mt-4">
              Fecha: 30 de Noviembre de 2024
            </Text>
            <Text className="text-[#314D4D] mt-4">
              Descripción: 
            </Text>
          </View>
        )}
      </Animated.View>
    </Pressable>


  )
}

export function AggCardActivity() {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  return(
  <View>
    <Pressable 
        onPress={() =>
          setModalVisible(!modalVisible)}>
      <View
        className="mx-12 rounded-xl py-4 px-6 border-2 overflow-hidden mt-6 border-[#126260]">
          <View className="flex flex-col justify-center items-center">
            <IconsLibrary
              IconComponent={MaterialCommunityIcons}
              iconColor="#126260"
              iconSize={50}
              iconName="plus"
            />
          </View>
      </View>

  </Pressable>

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View className="flex-1 px-8 py-8 justify-center items-center bg-black/50">
        <View className="bg-white w-full rounded-lg border-2 border-[#126260]">
          <Text
            style={{ fontFamily: "Roboto_900Black" }}
            className="text-center text-[#314D4D] text-2xl mt-4 mb-4">
              Añade una nueva actividad
          </Text>

        <View className="w-full"> 
          <View className="mb-4">
            <InputText placeholder="Categoria" type="text" />
          </View>
          <View className="mb-4">
            <InputText placeholder="Actividad" type="text" />
          </View>
          <View className="mb-4">
            <InputText placeholder="Fecha" type="text" />
          </View>
          <View className="mb-4">
            <InputText placeholder="Descripción" type="text" />
          </View>
        </View>

        <View className="flex flex-row justify-center items-center mr-4">
        <GradiantButton
            text="Aceptar"/>
            
            <FillButton
              text="Cancelar"
              Bcolor="#6BBF59"
              textColor="white"
              textSize="xl"
              onPress={closeModal}/>

        </View>
        </View>
      </View>
    </Modal>
  </View>
  );
}

export function AggCardAnimal() {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  return(
  <View>
    <Pressable 
        onPress={() =>
          setModalVisible(!modalVisible)}>
      <View
        className="mx-12 rounded-3xl py-4 px-6 border-2 overflow-hidden mt-6 border-[#126260]">
          <View className="flex flex-col justify-center items-center">
            <IconsLibrary
              IconComponent={MaterialCommunityIcons}
              iconColor="#126260"
              iconSize={50}
              iconName="plus"
            />
          </View>
      </View>

  </Pressable>

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View className="flex-1 px-8 py-8 justify-center items-center bg-black/50">
        <View className="bg-white w-full rounded-lg border-2 border-[#126260]">
          <Text
            style={{ fontFamily: "Roboto_900Black" }}
            className="text-center text-[#314D4D] text-2xl mt-4 mb-4">
              Registrar un animal
          </Text>

        <View className="w-full"> 
          <View className="mb-4">
            <InputText placeholder="Número" type="number" />
          </View>
          <View className="mb-4">
            <InputText placeholder="Sexo" type="text" />
          </View>
          <View className="mb-4">
            <InputText placeholder="Raza" type="Date" />
          </View>
          <View className="mb-4">
            <InputText placeholder="Especie" type="text" />
          </View>
          <View className="mb-4">
            <InputText placeholder="Número" type="text" />
          </View>
          <View className="mb-4">
            <InputText placeholder="Fecha de nacimiento" type="text" />
          </View>
        </View>

        <View className="flex flex-row justify-center items-center mr-4">
        <GradiantButton
            text="Aceptar"/>
            
            <FillButton
              text="Cancelar"
              Bcolor="#6BBF59"
              textColor="white"
              textSize="xl"
              onPress={closeModal}/>

        </View>
        </View>
      </View>
    </Modal>
  </View>
  );
}