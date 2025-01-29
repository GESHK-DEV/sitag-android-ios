import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const FillButton = React.forwardRef((props, ref) => {
  const { text, textColor, textSize, onPress } = props;

  return (
    <Pressable
      ref={ref} // Pasa la ref al Pressable
      className={`bg-[#314D4D]  px-5 py-4 rounded-lg`}
      onPress={onPress} // Asegúrate de manejar el evento onPress
    >
      <Text
        className={`text-${textColor} text-${textSize} text-center`}
        style={{ fontFamily: "Roboto_700Bold" }}
      >
        {text}
      </Text>
    </Pressable>
  );
});

export default FillButton;
