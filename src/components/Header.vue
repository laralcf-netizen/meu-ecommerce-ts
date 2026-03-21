<template>
  <header class="header">
    <!-- Logo -->
    <div class="logo">
      <RouterLink to="/">🛍️ MyShop</RouterLink>
    </div>

    <!-- Menu de navegação -->
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/cart" class="cart-link">
        🛒 Carrinho
        <span v-if="cartStore.totalItems > 0" class="cart-badge">
          {{ cartStore.totalItems }}
        </span>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore }from '../stores/cart'

const cartStore = useCartStore()
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #1a1a2e;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.logo a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 24px;
  align-items: center;
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.2s;
}

.nav a:hover {
  opacity: 0.7;
}

.cart-link {
  position: relative;
}

.cart-badge {
  background-color: #e94560;
  color: white;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: 4px;
}
</style>