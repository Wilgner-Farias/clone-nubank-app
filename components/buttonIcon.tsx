import { Pressable, View } from "react-native"
import Icon from "@expo/vector-icons/FontAwesome6";

type props = {
    icon: string,
    onPress: () => void;
}
export const ButtonIcon = ({icon, onPress}: props) => {
    return(
        <Pressable className="size-14 justify-center items-center rounded-full">
            <Icon name={icon} size={18} color="white"/>
        </Pressable>
    );
}