import { Product } from "src/interfaces/product";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      productDetail: { product: Product }
      cart: undefined
    }
  }
}