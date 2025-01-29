import { View, Text, ScrollView} from "react-native";
import Header from "../Components/header.jsx";
import { CardActivity } from "../Components/cards.jsx";
import { AggCardActivity } from "../Components/cards.jsx";

export default function DailyAct() {
    return (
        <View>

        <Header/>

        <Text
            className="text-center text-[#314D4D] text-2xl mt-3 mb-2"
            style={{ fontFamily: "Roboto_900Black" }}>
            Añade una nueva actividad
        </Text>

        <AggCardActivity/>

        <Text
            className="text-start text-[#314D4D] text-2xl ml-12 mt-8 mb-8"
            style={{ fontFamily: "Roboto_900Black" }}>
            Actividades de hoy
        </Text>

        <CardActivity/>

        <Text
            className="text-start text-[#314D4D] text-2xl ml-12 mt-8 mb-8"
            style={{ fontFamily: "Roboto_900Black" }}>
            Actividades pasadas
        </Text>

        <CardActivity/>

        </View>
    )
}