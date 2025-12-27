import { View, TouchableOpacity, Pressable } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

export const BottomNav = () => {
  return (
    <View className="absolute bottom-10 left-0 right-0 items-center">
      <Pressable
        className="rounded-full bg-white gap-8 px-4 py-2 flex-row justify-around"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 14,
          elevation: 12,
        }}
      >
        <TouchableOpacity className="flex-row items-center bg-nubanklight rounded-full px-6 py-4">
          <Icon name="arrow-right-arrow-left" size={22} color="#8308d1" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center rounded-full px-5 py-4">
          <Icon name="dollar-sign" size={22} color="#6d6d6d" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center rounded-full px-5 py-4">
          <Icon name="bag-shopping" size={22} color="#6d6d6d" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};
