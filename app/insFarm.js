import { View, Text, ScrollView } from "react-native";
import InputText from "../Components/UI/inputs";
import Header from "../Components/header.jsx";
import { CardFarm } from "../Components/cards.jsx";
import { AggCardFarm } from "../Components/cards.jsx";

export default function Farm() {
  return (
    <ScrollView className="bg-white flex-1">
      <View>
        <Header />

        <Text
          className="text-center text-[#314D4D] text-2xl mt-3 mb-8"
          style={{ fontFamily: "Roboto_900Black" }}
        >
          Inspecciona tus Fincas
        </Text>

        <InputText
          placeholder="Buscar..."
          type="text"
          className="text-center"
        />

        <Text
          className="text-[#314D4D] text-4xl ml-12 mt-16 mb-8"
          style={{ fontFamily: "Roboto_900Black" }}
        >
          Mis Fincas
        </Text>

        <CardFarm />

        <AggCardFarm />
      </View>
    </ScrollView>
  );
}
