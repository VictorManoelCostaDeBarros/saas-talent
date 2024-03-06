import { Image, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather } from '@expo/vector-icons'

import { Product } from "src/interfaces/product";
import { CircleButton } from "@components/CircleButton";
import ActionButton from "react-native-action-button";

type RouteParams = {
  product: Product
}

export function ProductDetail() {
  const navigation = useNavigation()
  const route = useRoute()

  const { product } = route.params as RouteParams

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <View className="w-full flex-row items-center justify-between px-4">
        <CircleButton 
          icon="arrowleft"
          ghost
          onPress={handleGoBack}
        />
      </View>


      <View className="w-full mt-16">
        <Image 
          className="w-full h-1/2"
          resizeMode="contain"
          source={{ uri: product.image }}
        />
      </View>

      <View className="mt-auto bg-zinc-200 max-w-full rounded-t-3xl p-4">
        <View className="flex-row gap-6">
            <View className="w-2/3">
              <Text className="font-semibold text-base text-zinc-800">{product.title}</Text>
              <Text className="font-normal text-sm text-zinc-600">{product.category}</Text>
            </View>

            <View>
              <View className="flex-row align-start">
                <Text className="text-xs mt-1 text-rose-400">$</Text>
                <Text className="text-2xl font-bold text-rose-400">{product.price}</Text>
              </View> 
              <View className="flex-row gap-1 items-center justify-end">
                <AntDesign size={14} name="star" style={{ color: '#eab308' }} />
                <Text className="font-normal text-sm text-zinc-600">{product.rating.rate}</Text>
              </View>
            </View>

        </View>

        <View className="my-10">
          <Text className="font-semibold text-base text-zinc-800">Description</Text>
          <Text className="font-normal text-sm text-zinc-600">{product.description}</Text>
        </View>
      </View>

      <ActionButton 
        buttonColor="#fb7185" 
        onPress={() => navigation.navigate('cart')}
        renderIcon={() => <Feather name="shopping-bag" size={20} color="#FFF" />}
      />
    </SafeAreaView>
  )
}