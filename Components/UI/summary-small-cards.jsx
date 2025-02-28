import { Pressable, Text, View, StyleSheet } from "react-native";

export default function SummarySmallCards({
  encabezado,
  numero,
  descripcion,
  textColor,
  cardColor,
}) {
  return (
    <Pressable
      className="px-2 py-4 rounded-lg flex-1"
      style={[{ backgroundColor: cardColor }, styles.shadow]}
    >
      <View className="flex flex-col gap-2">
        <Text
          className="text-[16px]"
          style={{ fontFamily: "Roboto_900Black", color: textColor }}
        >
          {encabezado}
        </Text>
        <Text
          className="text-4xl"
          style={{ fontFamily: "Roboto_900Black", color: textColor }}
        >
          {numero}
        </Text>
        <Text
          className="text-[12px]"
          style={{ fontFamily: "Roboto_900Black", color: textColor }}
        >
          {descripcion}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});
