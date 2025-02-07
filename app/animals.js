import { View, Text, ScrollView, Modal, Pressable } from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../Components/header.jsx";
import { LinearGradient } from "expo-linear-gradient";
import IconsLibrary from "../Components/UI/icons-library.jsx";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CardAnimal } from "../Components/cards.jsx";

export default function Animals() {
  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setModalVisible(true);
    }, [])
  );
  return (
    <ScrollView className="bg-white flex-1">
      <View>
        <Header />

        <Text
          className="text-center text-[#314D4D] text-4xl my-6"
          style={{ fontFamily: "Roboto_900Black" }}
        >
          Animales
        </Text>

        <CardAnimal />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="flex-1 justify-center items-center bg-black/50 px-6">
            <View className="w-[100%] h-[50%] bg-white p-6 rounded-lg border-4 border-[#126260] ">
              <View className="flex-row justify-between items-center mb-2">
                <Pressable
                  onPress={() => setModalVisible(false)}
                  className="w-12 h-12 rounded-full overflow-hidden"
                >
                  <LinearGradient
                    colors={["#0B6E4F", "#6BBF59"]}
                    start={{ x: 0, y: -0.9 }}
                    end={{ x: 0, y: 1 }}
                    className="w-full h-full justify-center items-center"
                  >
                    <IconsLibrary
                      IconComponent={MaterialCommunityIcons}
                      iconColor="#FFFFFF"
                      iconSize={40}
                      iconName="arrow-left"
                    />
                  </LinearGradient>
                </Pressable>
                <Text
                  className="text-center text-[#314D4D] text-xl mr-8 my-6"
                  style={{ fontFamily: "Roboto_900Black" }}
                >
                  Vista General del animal
                </Text>
              </View>

              <View className="flex-wrap flex-row justify-between">
                {[
                  { title: "Terneros", value: 8 },
                  { title: "T. Desarrollo", value: 10 },
                  { title: "Media Ceba", value: 5 },
                  { title: "Toros", value: 10 },
                  { title: "Terneras", value: 7 },
                  { title: "T. Desarrollo", value: 12 },
                  { title: "Novilla", value: 9 },
                  { title: "Vacas", value: 10 },
                ].map((item, index) => (
                  <View
                    key={index}
                    className="w-[48%] bg-[#F2F7F5] rounded-xl p-4 mb-4 shadow-md"
                  >
                    <Text
                      style={{ fontFamily: "Roboto_400Regular" }}
                      className="text-[#126260] text-lg"
                    >
                      {item.title}:{" "}
                      <Text className="font-bold">{item.value}</Text>
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
