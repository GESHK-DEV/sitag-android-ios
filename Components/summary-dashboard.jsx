import { View } from "react-native";
import SumaryCard from "./UI/summary-card";
import SummarySmallCards from "./UI/summary-small-cards";
import { CardActivity } from "./cards";
import { Text } from "react-native";
export default function SummaryDashboard() {
  return (
    <View className="mt-9">
      <SumaryCard />
      <View className="flex flex-row  gap-3 justify-center mt-4 mx-6 mb-8 ">
        <SummarySmallCards
          encabezado="Ver Animales"
          textColor="#6D5426"
          cardColor="#F5D69D"
          numero="20"
          descripcion="Animales Totales"
        />
        <SummarySmallCards
          encabezado="Cantidad de Gastos"
          textColor="#EF4400"
          cardColor="#FFFFFF"
          numero="50"
          descripcion="Gatos este Mes"
        />
      </View>
      <View className="flex flex-col gap-5">
        <Text
          className="text-3xl text-center text-[#6D5426]"
          style={{ fontFamily: "Roboto_900Black" }}
        >
          Actividades de Hoy
        </Text>
        <CardActivity />
        <CardActivity />
        <CardActivity />
        <CardActivity />
        <CardActivity />
      </View>
    </View>
  );
}
