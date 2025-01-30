import { Modal, Text } from "react-native";
import { View } from "react-native";
import FillButton from "./button";
import GradiantButton from "./gradiant-button";
import InputText from "./inputs";

export default function MedicalHistoryModal({ modalVisible, closeModal }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View className="flex-1  px-10  justify-center items-center bg-black/50">
        <View className="bg-white px-5 pb-5 rounded-lg border-2 border-[#126260]">
          <Text
            className=" text-center text-2xl pt-5   text-[#1C5754]"
            style={{ fontFamily: "CharlieDisplay-Bold" }}
          >
            Añade un resgistro médico
          </Text>
          <View className="flex flex-col gap-4 pb-10 pt-5 justify-center">
            <InputText placeholder="Número" />
            <InputText placeholder="Fecha" />
            <InputText placeholder="Medicamento" />
            <InputText placeholder="Razón" />
            <InputText placeholder="Dosis" />
            <InputText placeholder="Finca" />
            <View className="flex flex-row gap-1 justify-center items-center">
              <GradiantButton text="Añadir" />
              <FillButton
                text="Cancelar"
                onPress={closeModal}
                textColor="white"
                textSize="xl"
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
