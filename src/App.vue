<script lang="ts">
import { Product } from './model/product.model';
import { Cart } from './model/cart.model';
import ProductCard from './components/card/ProductCard.vue';
import CartItem from './components/card/CartItem.vue';

export default {
  components: { ProductCard, CartItem },

  data() {
    return {
      cart: new Cart(),
      products: [
        new Product(1, 'Guitarra',  '22 trastes', 200, 0.05, []),
        new Product(2, 'Guitarra2', '22 trastes', 200, 0.05, []),
      ],
    };
  },

  methods: {
    addItem(product: Product) {
      this.cart.addItem(product); // ← deixa a classe Cart fazer o trabalho
    },
    removeItem(product: Product) {
      this.cart.removeItem(product);
    },
    decrementItem(product: Product) {
      this.cart.decrementItem(product);
    },
  },
};
</script>

<template>
  <main>
    <!-- Lista de produtos -->
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" @on-add-item="addItem" />
      </div>
    </section>

    <!-- Carrinho -->
    <h2 class="mt-8">Carrinho</h2>
    
    <div v-if="cart.list.length === 0" class="border border-slate-500 bg-slate-400 rounded-sm h-64 w-1/2 flex items-center justify-center">
      <p>Carrinho vazio, vamos as compras!</p>
    </div>

    <div v-for="item in cart.list" :key="item.product.id">
      <CartItem
        :item="item"
        @on-remove-item="removeItem"
        @on-decrement-item="decrementItem"
      />
    </div>

    <p><strong>Total: {{ cart.getTotalPrice() }}</strong></p>
  </main>
</template>