import { View, ScrollView } from "react-native";
import AddFinance from "../Components/add-finance";
export default function FinanceForm() {
  return (
    <ScrollView className="bg-white flex-1">
      <View>
        <AddFinance />
      </View>
    </ScrollView>
  );
}
