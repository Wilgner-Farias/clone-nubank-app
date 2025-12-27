import { View, Text, ScrollView, Pressable } from 'react-native';
import Icon from "@expo/vector-icons/FontAwesome6";
import { StatusBar } from "expo-status-bar";
import { Header } from '../components/header';
import { ButtonCard } from '@/components/buttonCard';
import { ButtonAction } from '@/components/buttonAction';
import { ButtonGeneral } from '@/components/buttonGeneral';
import { BottomNav } from '@/components/bottomNav';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
    return (
        <View className="flex-1 bg-white">

            {/* Safe area só no topo */}

            {/* Conteúdo rolável */}
            <ScrollView
                className="flex-1 bg-white"
                contentContainerStyle={{ paddingBottom: 160 }}
                showsVerticalScrollIndicator={false}
            >
                <SafeAreaView edges={['top']} className="bg-nubank">
                    <StatusBar style="auto" translucent backgroundColor="transparent" />
                    <Header />
                </SafeAreaView>
                <ButtonCard title="Saldo em conta" onPress={() => { }}>
                    <Text className="text-2xl font-semibold">R$ 7.589,41</Text>
                </ButtonCard>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-3">
                    <ButtonAction icon="pix" label="Pix" onPress={() => { }} />
                    <ButtonAction icon="barcode" label="Pagar" onPress={() => { }} />
                    <ButtonAction icon="hand-holding-dollar" label="Pegar emprestado" badge="FGTS" onPress={() => { }} />
                    <ButtonAction icon="money-bill-transfer" label="Transferir" onPress={() => { }} />
                    <ButtonAction icon="dollar-sign" label="Converter limite" onPress={() => { }} />
                    <ButtonAction icon="piggy-bank" label="Converter limite" badge="115% CDI" onPress={() => { }} />
                    <ButtonAction icon="mobile-screen" label="Recarga de celular" onPress={() => { }} />
                    <ButtonAction icon="piggy-bank" label="Caixinhas e investir" onPress={() => { }} />
                </ScrollView>

                <View className="px-4 py-6">
                    <ButtonGeneral onPress={() => { }}>
                        <View className="flex-row items-center gap-5">
                            <Icon name="credit-card" size={24} color="black" />
                            <Text className="text-md font-semibold">Meus cartões</Text>
                        </View>
                    </ButtonGeneral>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View className="w-72 ml-4">
                        <ButtonGeneral onPress={() => { }}>
                            <View className="flex-row flex-wrap gap-1">
                                <Text>Você tem</Text>
                                <Text className="font-semibold">R$ 12.300,00</Text>
                                <Text>disponíveis para empréstimo.</Text>
                            </View>
                        </ButtonGeneral>
                    </View>

                    <View className="w-72 mx-4">
                        <ButtonGeneral onPress={() => { }}>
                            <Text className="text-nubank">Facilite seus planos futuros:</Text>
                            <Text>guarde dinheiro na caixinha que mais rende no Brasil</Text>
                        </ButtonGeneral>
                    </View>
                </ScrollView>

                <View className="h-1 bg-gray-100 mt-8" />

                <ButtonCard title="Cartão de crédito" onPress={() => { }}>
                    <Text className="text-xl text-gray-500">Fatura atual</Text>
                    <Text className="text-2xl font-semibold">R$ 7.589,41</Text>
                    <Text className="text-md text-gray-500">Limite disponível R$ 4.762,12</Text>
                </ButtonCard>

                <View className="h-1 bg-gray-100 mt-8" />

                <ButtonCard title="Empréstimos" onPress={() => { }}>
                    <Text className="text-md text-gray-500">
                        Dinheiro parado no FGTS? Você pode antecipar até 5 parcelas do seu saque-aniversário.
                    </Text>
                </ButtonCard>

                <View className="h-1 bg-gray-100 mt-8" />

                <View className="flex-row justify-center mt-3 h-20">
                    <Pressable className="flex-row items-center gap-3">
                        <Icon name="heart" size={22} color="#8308d1" />
                        <Text className="text-nubank text-md font-semibold">Avalie esta tela</Text>
                    </Pressable>
                </View>
            </ScrollView>

            {/* Bottom fixo fora do safe area */}
            <BottomNav />

        </View>
    );
}
