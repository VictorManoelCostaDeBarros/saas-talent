import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Cart } from "@screens/Cart"
import { Home } from "@screens/Home"
import { ProductDetail } from "@screens/ProductDetail"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="productDetail"
        component={ProductDetail}
      />

      <Screen 
        name="cart"
        component={Cart}
      />
    </Navigator>
  )
}