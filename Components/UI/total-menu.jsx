import { Text, View } from "react-native";

export default function TotalMenu() {
  return (
    <View className="flex flex-col justify-center items-center">
      <Text>Total</Text>
      <View className="flex flex-row gap-1">
        <Text>$</Text>
        <Text>500.50</Text>
      </View>
    </View>
  );
}
