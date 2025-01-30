import { View, Text, ScrollView} from "react-native";
import Header from "../Components/header.jsx";
import { CardAdminDiv } from "../Components/cards.jsx";

export default function AdminDiv() {
    return (
        <View>
            <Header/>

            <Text
            className="text-center text-[#314D4D] text-2xl mt-6 mb-2"
            style={{ fontFamily: "Roboto_900Black" }}>
                Administra tu división
            </Text>

            <CardAdminDiv/>

        </View>
    )
}