import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Tipo do produto (como uma "ficha" que descreve o que um produto tem)
export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

// Tipo do item do carrinho (produto + quantidade)
export interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  // 🗃️ Estado — as informações que o carrinho guarda
  const items = ref<CartItem[]>([])

  // 🧮 Calculados automaticamente
  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  )

  // ⚙️ Ações — o que o carrinho pode fazer
  function addToCart(product: Product) {
    const existing = items.value.find(i => i.product.id === product.id)

    if (existing) {
      // Se o produto já está no carrinho, só aumenta a quantidade
      existing.quantity++
    } else {
      // Se não está, adiciona como novo item
      items.value.push({ product, quantity: 1 })
    }
  }

  function removeFromCart(productId: number) {
    items.value = items.value.filter(i => i.product.id !== productId)
  }

  function increaseQuantity(productId: number) {
    const item = items.value.find(i => i.product.id === productId)
    if (item) item.quantity++
  }

  function decreaseQuantity(productId: number) {
    const item = items.value.find(i => i.product.id === productId)
    if (item) {
      if (item.quantity === 1) {
        // Se só tem 1, remove do carrinho
        removeFromCart(productId)
      } else {
        item.quantity--
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  }
})