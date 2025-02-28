import { Text, View, TextInput, Pressable } from "react-native";
import TransactionHeader from "./UI/transaction-header";
import { useState } from "react";

export default function AddFinance() {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");

  return (
    <View>
      <TransactionHeader />
      <View className="flex flex-row items-center justify-center gap-2 mt-8">
        <Text
          className="text-2xl"
          style={{ fontFamily: "CharlieDisplay-Semibold" }}
        >
          $
        </Text>

        <TextInput
          onChangeText={onChangeNumber}
          style={{ fontFamily: "CharlieDisplay-Semibold" }}
          className="text-2xl "
          value={number}
          placeholder="Monto"
          keyboardType="numeric"
        />
        
      </View>

      <View className="items-center justify-center my-2">
        <TextInput
          style={{ fontFamily: "CharlieDisplay-Semibold" }}
          className="text-2xl items-center justify-center"
          placeholder="Fecha"
        />
        </View>

      <View className="flex flex-col mx-12 gap-4">
        <Text
          className="text-2xl"
          style={{ fontFamily: "CharlieDisplay-Bold" }}
        >
          De:
        </Text>
        <TextInput placeholder="Ingresar cuenta" type="text"/>
      </View>
      <View className="flex flex-col mx-12 mt-7 gap-4">
        <Text
          className="text-2xl mt-5"
          style={{ fontFamily: "CharlieDisplay-Bold" }}
        >
          Para:
        </Text>
        <TextInput placeholder="Ingresar cuenta" type="text"/>
      </View>

      <Pressable className="bg-[#A0E060] px-3 py-1 rounded-xl mt-80 mx-12 flex flex-col-reverse justify-end ">
        <View>
          <Text
            className="text-[#1C5754] text-2xl text-center"
            style={{ fontFamily: "CharlieDisplay-Semibold" }}
          >
            Añadir
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
