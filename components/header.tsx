import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ProfileIcon } from "./profileicon"
import { ButtonIcon } from "./buttonIcon"

export const Header = () => {
    return(
        <SafeAreaView className="bg-nubank text-white">
            <View className="flex-row justify-between px-4">
                <ProfileIcon />
                <View className="flex-row">
                    <ButtonIcon icon="eye-slash" onPress={() => {}}/>
                    <ButtonIcon icon="circle-question" onPress={() => {}}/>
                    <ButtonIcon icon="message" onPress={() => {}}/>
                </View>
            </View>
            <View className="px-4">
                <Text className="text-white font-semibold text-2xl pt-4">Olá, Wilgner</Text>
            </View>
        </SafeAreaView>
    )
}