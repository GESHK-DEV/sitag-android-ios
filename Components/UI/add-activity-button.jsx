import React, {useState} from "react";
import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import IconsLibrary from "./icons-library";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import InputText from "./inputs";
import GradiantButton from "./gradiant-button";
import FillButton from "./button";

export default function AddActivityButton() {
    const [modalVisible, setModalVisible] = useState(false);
    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <View>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <View className="mx-12 rounded-xl py-4 px-6 bg-white overflow-hidden mt-6 " style={styles.activityCard} >
                    <View className="flex flex-col justify-center items-center">
                        <IconsLibrary
                            IconComponent={FontAwesome5}
                            iconColor="#6BBF59"
                            iconSize={45}
                            iconName="plus"
                        />
                    </View>
                </View>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View className="flex-1 px-8 py-8 justify-center items-center bg-black/50">
                    <View className="bg-white w-full rounded-lg border-2 border-[#126260]">
                        <Text
                            style={{ fontFamily: "Roboto_900Black" }}
                            className="text-center text-[#314D4D] text-2xl mt-4 mb-4"
                        >
                            Añade una nueva actividad
                        </Text>

                        <View className="w-full">
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
                            <GradiantButton text="Aceptar" />

                            <FillButton
                                text="Cancelar"
                                Bcolor="#6BBF59"
                                textColor="white"
                                textSize="xl"
                                onPress={closeModal}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    activityCard: {
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