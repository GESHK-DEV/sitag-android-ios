import { Pressable, Text } from "react-native";

export default function BorderButton({ text }) {
  return (
    <Pressable className="border-2 mx-14 mt-8 rounded-xl bg-white border-green-700 py-7 px-5 text-xl">
      <Text className="text-xl font-bold text-green-600 text-center">
        {text}
      </Text>
    </Pressable>
  );
}
