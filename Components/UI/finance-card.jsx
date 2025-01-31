import { Text, View, StyleSheet, Animated, Pressable } from "react-native";
import IconsLibrary from "./icons-library";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState, useRef } from "react";
export default function FinanceCard({ title, percent, cost }) {
  return (
    <Pressable>
      <View
        style={styles.shadow}
        className="mx-7 rounded-xl py-2 px-6 bg-white overflow-hidden "
      >
        <View className="flex flex-row justify-between items-center">
          <View className="bg-[#16AB76] rounded-full p-2 flex justify-center items-center">
            <IconsLibrary
              IconComponent={MaterialIcons}
              iconName="grass"
              iconSize={22}
              iconColor="#FFFFFF"
            />
          </View>

          <Text
            className="text-xl"
            style={{ fontFamily: "CharlieDisplay-Bold" }}
          >
            {title}
          </Text>
          <View className="flex flex-row gap-1 items-center">
            <Text
              className="text-xl text-[#1C60CE]"
              style={{ fontFamily: "CharlieDisplay-Bold" }}
            >
              {percent}
            </Text>
            <Text
              className="text-xl text-[#1C60CE]"
              style={{ fontFamily: "CharlieDisplay-Bold" }}
            >
              %
            </Text>
          </View>
          <View className="flex flex-row gap-1 items-center">
            <Text
              className="text-xl text-[#F8672E]"
              style={{ fontFamily: "CharlieDisplay-Bold" }}
            >
              $
            </Text>
            <Text
              className="text-xl text-[#F8672E]"
              style={{ fontFamily: "CharlieDisplay-Bold" }}
            >
              {cost}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#989898",
    shadowOffset: {
      width: 2,
      height: 2,
    },

    shadowRadius: 10,
    elevation: 10,
  },
});
