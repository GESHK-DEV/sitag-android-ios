import { Text, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const GradiantButton = React.forwardRef((props, ref) => {
  const { text, onPress } = props;

  return (
    <Pressable ref={ref} onPress={onPress} className=" px-5 py-4 rounded-2xl">
      <LinearGradient
        colors={["#0B6E4F", "#6BBF59"]}
        start={{ x: 0, y: -0.9 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <Text
          className="text-white text-center font-semibold text-xl"
          style={{ fontFamily: "Roboto_700Bold" }}
        >
          {text}
        </Text>
      </LinearGradient>
    </Pressable>
  );
});
export default GradiantButton;

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: "center",
  },
});
