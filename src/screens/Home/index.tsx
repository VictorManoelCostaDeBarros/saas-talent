import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View, Text, Alert, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios'
import { Feather as Icon } from '@expo/vector-icons'
import ActionButton from 'react-native-action-button';

import { Product } from "src/interfaces/product";
import { CardItem } from "@components/CardItem";

export function Home() {
  const navigation = useNavigation()

  const [products, setProducts] = useState<Product[]>([])

  async function getMeals() {
    try {
      const { data } = await axios.get<Product[]>('https://fakestoreapi.com/products')
 
      setProducts(data.map(item => {
        return {
          ...item,
          quantity: 1
        }
      }))

    } catch (error) {
      console.log(error)
      Alert.alert('Products', 'The products could not be loaded..')
    }
  }

  useFocusEffect(
    useCallback(() => {
      getMeals()
    }, [])
  )

  return (
    <SafeAreaView className="flex-1 items-center bg-zinc-300 p-2">
      <FlatList 
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <CardItem  
            onPress={() => navigation.navigate('productDetail', { product: item })}
            product={item}
            index={index}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 70,
          gap: 10
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
 
      <ActionButton 
        buttonColor="#fb7185" 
        onPress={() => navigation.navigate('cart')}
        renderIcon={() => <Icon name="shopping-bag" size={20} color="#FFF" />}
      />
    </SafeAreaView>
  )
}