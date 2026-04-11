<script lang="ts">
import { Product } from '@/model/product.model';
import { Cart } from '@/model/cart.model';
import ProductCard from '@/components/card/ProductCard.vue';
import CartItem from '@/components/card/CartItem.vue';
import { ProductRest } from '@/services/config/rest/product.rest';

export default {
  name: 'HomePage',
  components: { ProductCard, CartItem },
  mounted(){
    this.getProducts()
  },
  data() {
    return {
      cart: new Cart(),
      products: [],
    };
  },

  computed:{
    rest(): ProductRest {
      return new ProductRest()
    },
  },
  methods: {
    addItem(product: Product) {
      this.cart.addItem(product); // ← deixa a classe Cart fazer o trabalho
    },
    removeItem(product: Product) {
      this.cart.removeItem(product);
    },
    getproducts(){
      const params ={page:1, limit:10}
        this.rest.getAll(params).then((res)=>{
        this.products = res.data.data.map((product: Product)=>{
          return new Product(product.id, product.name, product.description,product.price,0, product.images)
        })
        console.log(this.products, 'products')
      })
    },
    decrementItem(product: Product) {
      this.cart.decrementItem(product);
    },
    goToDetail(product: Product){
      const id = product.id
      this.$router.push({path:`/products/${id}`});
    }
  },
};
</script>

<template>
  <main>
    <!-- Lista de produtos -->
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id">
        <div @click="goToDetail(product)">
           <ProductCard :product="product" @on-add-item="addItem" />
        </div>
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
