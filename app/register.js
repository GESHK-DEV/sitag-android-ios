import { View, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
import UserIcon from "../assets/user-icon.js";
import RegisterForm from "../Components/register-form.jsx";
export default function Register() {
  return (
    <ScrollView className="bg-white flex-1">
      <View className=" mt-9">
        <View className="flex justify-center items-center">
          <SvgXml xml={UserIcon} />
        </View>

        <RegisterForm />
      </View>
    </ScrollView>
  );
}
