import { Pressable, Text, View } from "react-native";
import { SimpleCard } from "./UI/summary-card";
import MedicalHistoryCard from "./UI/medical-history-card";
import { useState } from "react";
import MedicalHistoryModal from "./UI/add-medical-history-modal";

export default function DrugLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View>
      <View className=" mx-[19px] mt-7">
        <Pressable onPress={openModal}>
          <SimpleCard text="Añadir Acción" />
        </Pressable>
      </View>
      <Text
        className="text-4xl text-center mt-14 text-black"
        style={{ fontFamily: "CharlieDisplay-Bold" }}
      >
        Historial Médico
      </Text>
      <View className="mt-4 flex flex-col gap-4">
        <MedicalHistoryCard
          number="4/16"
          fecha="4/8/2025"
          medicamento="permetrina"
          razon="control de garrapatas"
          dosis="10ml"
          finca="Finca 1"
        />
        <MedicalHistoryCard
          number="4/15"
          fecha="4/8/2025"
          medicamento="permetrina"
          razon="control de garrapatas"
          dosis="10ml"
          finca="Finca 2"
        />
        <MedicalHistoryCard
          number="4/13"
          fecha="4/8/2025"
          medicamento="permetrina"
          razon="control de garrapatas"
          dosis="10ml"
          finca="Finca 3"
        />
      </View>
      <MedicalHistoryModal
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
    </View>
  );
}
