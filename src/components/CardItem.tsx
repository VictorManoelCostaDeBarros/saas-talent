import { Dimensions, Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { AntDesign as Icon } from '@expo/vector-icons'

import { useCartStore } from "../store/cart-store";
import { Product } from "src/interfaces/product";
import { CircleButton } from "./CircleButton";
import { useMemo } from "react";
import Rating from "./Rating";
import { nameShortener } from "@utils/nameShortener";

type Props = TouchableOpacityProps & {
  product: Product
  index: number
}

const windowWidth = Dimensions.get('window').width;

export function CardItem({ product, index, ...rest }: Props) {
  const { favoriteProducts, toggleFavorite, addToCart } = useCartStore()

  return (
    <TouchableOpacity 
      style={{ width: (windowWidth - 30) / 2, marginLeft: index % 2 === 0 ? 0 : 10 }} 
      className="rounded-md p-4 bg-white"
      {...rest} 
    >
      <TouchableOpacity 
        className="flex-col items-end justify-end"
        onPress={() => toggleFavorite(product.id)}
      >
        <Icon 
          name={favoriteProducts.includes(product.id) ? "heart" : "hearto"} 
          size={18} 
          style={favoriteProducts.includes(product.id) ? { color: '#f43f5e' } : null}
        />
      </TouchableOpacity>

      <Image 
        className="w-full h-24"
        resizeMode="contain"
        source={{ uri: product.image }}
      />

      <View className="w-full mt-4 flex-row justify-between">
        <View>
          <Text className="font-semibold text-lg text-zinc-500">{nameShortener(product.title)}</Text>
          <View className="flex-row align-start">
            <Text className="text-xs mt-1">$</Text>
            <Text className="text-xl font-bold">{product.price}</Text>
          </View> 
          <Rating rating={product.rating.rate} />
        </View>

        <View className="items-end justify-end">
          <CircleButton 
            icon="plus" 
            onPress={() => addToCart(product)} 
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}