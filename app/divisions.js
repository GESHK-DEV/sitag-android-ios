import { View, Text, ScrollView} from "react-native";
import Header from "../Components/header.jsx";
import InputText from "../Components/UI/inputs";
import { CardDivisions } from "../Components/cards.jsx";

export default function Divisions() {
    return (
        <View>
            <Header/>
            <View className="mt-4">
                <InputText placeholder="Buscar..." type="text" className="text-center"/>
            </View>
            <Text
            className="text-center text-[#314D4D] text-3xl mt-3 mb-8"
            style={{ fontFamily: "Roboto_900Black" }}>
                Finca Cordillera
            </Text>

            <View className="flex-1 justify-center items-center my-10">
            <View className="w-24 h-24 border-2 border-[#126260] rounded-full items-center justify-center ">
                <Text
                className="text-center text-[#314D4D] text-5xl mt-3 "
                style={{ fontFamily: "Roboto_900Black" }}>
                    40
                </Text>
            </View>
            </View>

            <Text
            className="text-center text-[#314D4D] text-2xl mt-6 "
            style={{ fontFamily: "Roboto_900Black" }}>
                Animales
            </Text>
    
            <Text
            className="text-[#314D4D] text-4xl ml-12 mt-12 mb-8"
            style={{ fontFamily: "Roboto_900Black" }}>
                Mis Divisiones
            </Text>

            <CardDivisions/>

        </View>
    )
}