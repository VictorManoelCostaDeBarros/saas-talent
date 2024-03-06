import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign as Icon } from '@expo/vector-icons'

import { CircleButton } from "@components/CircleButton";
import { useCartStore } from "../../store/cart-store"
import { nameShortener } from "@utils/nameShortener";

export function Cart() {
  const navigation = useNavigation()
  const { products, incrementProduct, decrementProduct } = useCartStore()

  return (
    <SafeAreaView className="flex-1 w-full items-center bg-zinc-200">
      <View className="w-full flex-row items-center justify-between px-4">
        <CircleButton 
          icon="appstore-o"
          ghost
          onPress={() => navigation.navigate('home')}
        />
      </View>

      <View className="flex-1">
        <FlatList 
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View className="bg-white flex-row  min-w-full p-4 rounded-md">
              <Image 
                className="w-24 h-24"
                resizeMode="contain"
                source={{ uri: item.image }}
              />

              <View className="ml-4">
                <Text className="font-semibold text-lg text-zinc-500">{nameShortener(item.title)}</Text>
                <View className="flex-row align-start">
                  <Text className="text-xs mt-1">$</Text>
                  <Text className="text-xl font-bold">{item.price}</Text>
                </View> 

                <View className="flex-row mt-4">
                  <TouchableOpacity 
                    className="w-6 h-6 items-center justify-center border rounded-sm"
                    onPress={() => decrementProduct(item.id)}
                  >
                    <Icon name="minus" />
                  </TouchableOpacity>

                  <View className="w-6 h-6 items-center justify-center bg-zinc-800 mx-2 rounded-sm">
                    <Text className="text-zinc-100">{item.quantity}</Text>
                  </View>

                  <TouchableOpacity 
                    className="w-6 h-6 items-center justify-center border rounded-sm"
                    onPress={() => incrementProduct(item.id)}
                  >
                    <Icon name="plus" />
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          )}
          contentContainerStyle={{
            paddingBottom: 40,
            gap: 16,
            paddingHorizontal: 16,
            marginTop: 20,
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View className="flex-1 items-center justify-center">
              <Text className="text-2xl text-zinc-700">No products added</Text>
            </View>
          }
        />
      </View>

      {
        products.length > 0 ? (
          <View className="mt-auto w-full bg-white max-w-full rounded-t-3xl p-4">
            <Text className="font-semibold text-base text-zinc-800">Price Details</Text>

            <View className="flex-row items-center justify-between mt-2">
              <Text className="font-semibold text-base text-zinc-600">Total Amount</Text>
              <Text className="font-semibold text-base text-zinc-600">$100.00</Text>
            </View>

            <View className="flex-row items-center justify-between mt-1">
              <Text className="font-semibold text-base text-zinc-600">Bag Discount</Text>
              <Text className="font-semibold text-base text-emerald-600">$-10.00</Text>
            </View>

            <View className="flex-row items-center justify-between mt-1">
              <Text className="font-semibold text-base text-zinc-600">Estimated Tax</Text>
              <Text className="font-semibold text-base text-zinc-600">$05.00</Text>
            </View>

            <View className="flex-row items-center justify-between mt-1">
              <Text className="font-semibold text-base text-zinc-600">Delivery Charges</Text>
              <Text className="font-semibold text-base text-zinc-600">$30.00</Text>
            </View>
              
            <View className="w-full h-px bg-zinc-400 my-4" />

            <View className="flex-row items-center justify-between mt-1">
              <Text className="font-bold text-lg text-zinc-600">Total Amount</Text>
              <Text className="font-bold text-lg text-rose-600">$200.00</Text>
            </View>

            <TouchableOpacity className="w-full p-4 bg-rose-400 rounded-md mt-4 items-center justify-center">
              <Text className="font-semibold text-base text-zinc-100">Check Out</Text>
            </TouchableOpacity>
          </View>
        ) : null
      }
    </SafeAreaView>
  )
}