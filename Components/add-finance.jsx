import { Text, View, TextInput, Pressable } from "react-native";
import TransactionHeader from "./UI/transaction-header";
import { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";
export default function AddFinance() {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Gio", value: "Gio" },
    { label: "Geshk", value: "Geshk" },
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: "Gio", value: "Gio" },
    { label: "Geshk", value: "Geshk" },
  ]);
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

      <View className="flex flex-col mx-12 gap-4">
        <Text
          className="text-2xl"
          style={{ fontFamily: "CharlieDisplay-Bold" }}
        >
          De:
        </Text>
        <DropDownPicker
          open={open}
          className="border-transparent"
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Selecciona una cuenta"
        />
      </View>
      <View className="flex flex-col mx-12 mt-7 gap-4">
        <Text
          className="text-2xl mt-5"
          style={{ fontFamily: "CharlieDisplay-Bold" }}
        >
          Para:
        </Text>
        <DropDownPicker
          open={open2}
          className="border-transparent"
          value={value2}
          items={items2}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
          placeholder="Selecciona una cuenta"
        />
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
