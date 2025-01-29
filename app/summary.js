import { View, Text } from "react-native";
import Header from "../Components/header";
import SummaryDashboard from "../Components/summary-dashboard";
export default function Summary() {
  return (
    <View>
      <Header />
      <View className="mt-9 flex justify-center ">
        <SummaryDashboard />
      </View>
    </View>
  );
}
