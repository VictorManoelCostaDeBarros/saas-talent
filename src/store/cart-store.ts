import { Product } from 'src/interfaces/product';
import { create } from 'zustand';

export type CartState = {
  favoriteProducts: Array<number>
  products: Product[]
  toggleFavorite: (productId: number) => void
  addToCart: (product: Product) => void
  incrementProduct: (productId: number) => void
  decrementProduct: (productId: number) => void
}

export const useCartStore = create<CartState>((set, get) => {
  return {
    favoriteProducts: [],
    products: [],
  
    toggleFavorite: (productId: number) => {
      const { favoriteProducts } = get()
  
      if (favoriteProducts.includes(productId)) {
        const favoriteProductsFiltered = favoriteProducts.filter(product => product !== productId)
        set({
          favoriteProducts: [...favoriteProductsFiltered]
        })
      } else {
        set({
          favoriteProducts: [...favoriteProducts, productId]
        })
      }
    },

    addToCart: (product: Product) => {
      const { products } = get()

      if (products.find(prd => prd.id === product.id)) {
        products.find(prd => prd.id === product.id)!.quantity += 1

        set({
          products: products
        })
      } else {
        set({
          products: [...products, product]
        })
      }

    },

    incrementProduct: (productId: number) => {
      const { products } = get()

      if (products.find(product => product.id === productId)) {
        products.find(product => product.id === productId)!.quantity += 1

        set({
          products: products
        })
      }
    },

    decrementProduct: (productId: number) => {
      const { products } = get()

      if (products.find(product => product.id === productId)) {
        products.find(product => product.id === productId)!.quantity -= 1

        if (products.find(product => product.id === productId)!.quantity <= 0) {
          const filteredProducts = products.filter(product => product.id !== productId)

          set({
            products: filteredProducts
          })
          return
        }

        set({
          products: products
        })
      }
    }
  }
});
