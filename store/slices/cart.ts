import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Product {
  id: string
  name: string
  image: string
  price: number
  description: string
  brand: string
  rating: number
  sold: number
}

interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const savedCart = typeof window !== "undefined" 
  ? JSON.parse(localStorage.getItem("cart") || "[]")
  : []

const initialState: CartState = {
  items: savedCart
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // Adicionar item ao carrinho 

    addToCart: (state, action :PayloadAction<Product>) => {

      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ product: action.payload, quantity: 1 })
      }
      localStorage.setItem("cart", JSON.stringify(state.items))
    },
    
    // Remover do carrinho

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        item => item.product.id !== action.payload
      )
      localStorage.setItem("cart", JSON.stringify(state.items))
    },

    // Aumentar ou diminuir quantidade do produto no carrinho

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; signal: string }>
    ) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload.id
      )
      if (item && action.payload.signal === '-') {
        if (item.quantity > 1) item.quantity -= 1
      } else if (item && action.payload.signal === '+') {
        item.quantity += 1
      }
      localStorage.setItem("cart", JSON.stringify(state.items))
    },

    // Limpar carrinho

    clearCart: (state) => {
      state.items = []
      localStorage.removeItem("cart")
    },
  },
  
})

export const cart = cartSlice.reducer

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions