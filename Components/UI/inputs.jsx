import { Text, View, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function InputText({ placeholder, type, onChangeText, value }) {
  return (
    <TextInput
      style={{ fontFamily: "Roboto_400Regular" }}
      onChangeText={onChangeText}
      value={value}
      keyboardType={type == "email" ? "email-address" : "default"}
      secureTextEntry={type == "password" ? true : false}
      className="text-lg text-gray-700, border-2 border-green-700 rounded-xl mx-12 py-4"
      placeholder={placeholder}
    />
  );
}
