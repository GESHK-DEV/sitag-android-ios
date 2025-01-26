import { Pressable } from "react-native";
import { Text, StyleSheet } from "react-native";
export default function FillButton({ text, textColor, textSize }) {
  return (
    <Pressable className={`bg-[#314D4D] mx-14  px-5 py-4 rounded-lg`}>
      <Text
        className={`text-${textColor} text-${textSize}  text-center  `}
        style={{ fontFamily: "Roboto_700Bold" }}
      >
        {text}
      </Text>
    </Pressable>
  );
}
