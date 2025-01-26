// components/cards.jsx
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text, StyleSheet } from "react-native";

export default function IconsLibrary({
  IconComponent,
  iconName,
  iconSize,
  iconColor,
}) {
  return (
    <View>
      {IconComponent && (
        <IconComponent name={iconName} size={iconSize} color={iconColor} />
      )}
    </View>
  );
}
