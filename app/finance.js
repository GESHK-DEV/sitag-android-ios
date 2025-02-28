import FinanceLayout from "../Components/finance-layout";
import { View, ScrollView } from "react-native";
export default function Finance() {
  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <FinanceLayout />
      </View>
    </ScrollView>
  );
}
