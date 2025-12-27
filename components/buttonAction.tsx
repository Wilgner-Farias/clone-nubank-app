import { Pressable, View, Text } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";

type Props = {
  icon: string;
  label: string;
  badge?: string;
  onPress: () => void;
};

export const ButtonAction = ({ icon, label, badge, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} className="w-24 items-center">
      <View className="bg-gray-100 w-20 h-20 rounded-full justify-center items-center">
        <Icon name={icon} size={20} color="black" />
      </View>

      {badge && (
        <View className="bg-nubank -mt-4 px-2 rounded">
          <Text className="text-white text-xs font-semibold">{badge}</Text>
        </View>
      )}

      <Text className="text-center mt-2 text-sm font-semibold">
        {label}
      </Text>
    </Pressable>
  );
};
