import { View } from "react-native"
import Icon from "@expo/vector-icons/FontAwesome6";

export const ProfileIcon = () => {
    return(
        <View className="size-12 bg-white/30 justify-center items-center rounded-full">
            <Icon name="user" size={18} color="white"/>
        </View>
    );
}