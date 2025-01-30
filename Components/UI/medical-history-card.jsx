import { View, StyleSheet, Modal, Pressable } from "react-native";
import { Image } from "expo-image";
import { Text } from "react-native";
import { useState } from "react";
import Cow from "../../assets/cow.jpg";
import FillButton from "./button";
export default function MedicalHistoryCard({
  number,
  fecha,
  medicamento,
  dosis,
  razon,
  finca,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <Pressable onPress={() => setModalVisible(!modalVisible)}>
      <View
        className="flex flex-row mx-[19px] bg-white "
        style={[styles.shadow, { borderRadius: 15 }]}
      >
        <Image
          source={Cow}
          style={{
            width: 80,
            height: 80,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        />

        <View className="flex flex-col justify-center ms-3">
          <View className="flex flex-row gap-1">
            <Text
              className="text-2xl"
              style={{ fontFamily: "CharlieDisplay-Semibold" }}
            >
              Número:
            </Text>
            <Text
              className="text-2xl"
              style={{ fontFamily: "CharlieDisplay-Semibold" }}
            >
              {number}
            </Text>
          </View>

          <Text
            style={{ fontFamily: "Roboto_400Regular" }}
            className="text-gray-500"
          >
            {fecha}
          </Text>
        </View>

        {/*Modal */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View className="flex-1  px-8  justify-center items-center bg-black/50">
            <View className="bg-white px-2  rounded-lg border-2 border-[#126260]">
              <View className="mt-2 mb-2">
                <Image
                  source={Cow}
                  style={{
                    width: 300,
                    height: 250,
                    borderRadius: 4,
                  }}
                />
                <View className="flex flex-col gap-1 mb-8 mt-4 ">
                  {/* numero */}
                  <View className="flex flex-row gap-1 mt-2">
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      Número:
                    </Text>
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      {number}
                    </Text>
                  </View>
                  {/* fecha */}
                  <View className="flex flex-row gap-1 mt-2">
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      Fecha:
                    </Text>
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      {fecha}
                    </Text>
                  </View>
                  {/* medicamento */}
                  <View className="flex flex-row gap-1 mt-2">
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      Medicamento:
                    </Text>
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      {medicamento}
                    </Text>
                  </View>
                  {/* dosis */}
                  <View className="flex flex-row gap-1 mt-2">
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      Dosís:
                    </Text>
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      {dosis}
                    </Text>
                  </View>
                  {/* razon */}
                  <View className="flex flex-row gap-1 mt-2">
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      Razón:
                    </Text>
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      {razon}
                    </Text>
                  </View>
                  {/* finca */}
                  <View className="flex flex-row gap-1 mt-2">
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      Finca:
                    </Text>
                    <Text
                      className="text-xl"
                      style={{ fontFamily: "CharlieDisplay-Semibold" }}
                    >
                      {finca}
                    </Text>
                  </View>
                </View>
                <FillButton
                  text="Cerrar"
                  onPress={closeModal}
                  textColor="white"
                  textSize="2xl"
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});
