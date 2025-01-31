import { View } from "react-native";
import FinanceHeader from "./UI/finance-header";
import FinanceCard from "./UI/finance-card";
import FinanceChart from "./UI/finance-chart";
export default function FinanceLayout() {
  const series = [
    { value: 37.5, color: "#16AB76" },
    { value: 62.5, color: "#A0E060" },
  ];
  return (
    <View>
      <FinanceHeader />
      <View className="mt-5">
        <FinanceChart serie={series} totalExpense="500.50" />
      </View>

      <View className="mt-5 flex flex-col gap-3 mb-10">
        <FinanceCard title="Alimento" percent="62.5" cost="310.31" />
        <FinanceCard title="Medicina" percent="37.5" cost="185.185" />
        <FinanceCard title="Medicina" percent="37.5" cost="185.185" />
        <FinanceCard title="Medicina" percent="37.5" cost="185.185" />
        <FinanceCard title="Medicina" percent="37.5" cost="185.185" />
      </View>
    </View>
  );
}
