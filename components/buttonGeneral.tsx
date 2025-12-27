import { Pressable, View, Text } from "react-native";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onPress: () => void;
};

export const ButtonGeneral = ({ children, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} className="bg-gray-100 rounded-2xl p-4">
      {children}
    </Pressable>
  );
};
