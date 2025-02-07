import { View, ScrollView } from "react-native";
import Header from "../Components/header";
import DrugLayout from "../Components/drug-component";
export default function Drugs() {
  return (
    <ScrollView className="bg-white flex-1">
      <View>
        <Header />
        <DrugLayout />
      </View>
    </ScrollView>
  );
}
